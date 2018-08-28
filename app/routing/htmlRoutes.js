var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});  