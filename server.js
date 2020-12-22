const express = require("express");
// require fs module
const fs = require("fs");
const path = require("path");

const { nanoid } = require("nanoid");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Common practice to register API routes before html routes
app.get("/api/notes", function (req, res) {
  //Use the fs module to read the file
  const fileData = JSON.parse(fs.readFileSync("db/db.json", { encoding: "utf-8" }));
  // console.log(fileData);

  //Send the parsed data back to the client with res.json()
  res.json(fileData);
});

//POST creates NEW THINGS on the server
app.post("/api/notes", function (req, res) {
  //Access POSTed data in req.body
  req.body.id = nanoid();

  //Use the fs module to read the file
  //THEN parse the file contents with JSON.parse() to get th real data
  const fileData = JSON.parse(fs.readFileSync("db/db.json", { encoding: "utf-8" }));

  //Push the req.body to the array list
  fileData.push(req.body);

  //JSON.stringify the array list back into a JSON string
  //THEN save the contents back to the db.json file using the fs module
  fs.writeFile("db/db.json", JSON.stringify(fileData), (err) => {
    if (err) throw err;
    console.log("success!");
  });
});

app.delete("/api/notes/:id", function (req, res) {
  //Access id from req.params.id for loop

  //Use the fs module to read the file
  fs.readFile("db.json");

  //THEN use .then and parse the file contents with JSON.parse() to get th real data

  //Option A
  //Find the matching index using the Array.findIndex() method
  //Remove target elements using the Array.splice() method

  //Option B
  //Use the Array.filter method to filter out the matching element
  //Also this array is not defined. Use let.
  myArray = myArray.filter((element) => element.id !== req.params.id);

  //Return any type of success message. Property of value assigned true??
});

app.get("/notes", function (req, res) {
  //Return contents of notes.html
  res.sendFile(path.join(__dirname, "public/notes.html" /** Reference 11.2 mini-project **/));
});

// Star route should always come last
app.get("*", function (req, res) {
  //Return contents of index.html
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function () {
  console.log("App listening on localhost:http://localhost:" + PORT);
});
