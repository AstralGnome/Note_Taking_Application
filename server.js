const express = require("express");
// require fs module
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Common practice to register API routes before html routes
app.get("/api/notes", function (req, res){
  
  //Use the fs module to read the file
  fs.readFile(__dirname, "db.json");
  
  //THEN use .then and parse the file contents with JSON.parse() to get th real data

  //Send the parsed data back to the client with res.json()
});

app.get("/notes", function (req, res) {
  //Return contents of notes.html
  res.sendFile(path.join(__dirname, "notes.html" /** Reference 11.2 mini-project **/));
  
});

// Star route should always come last
app.get("*", function (req, res) {
  //Return contents of index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
