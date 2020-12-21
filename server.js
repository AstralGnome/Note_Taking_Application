const express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  //Return contents of index.html
  res.sendFile(path.join(__dirname, "index.html") /** Reference 11.2 mini-project **/);
});

app.get("/notes", function (req, res) {
  //Return contents of notes.html
  res.sendFile(path.join(__dirname, "notes.html"));

});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
