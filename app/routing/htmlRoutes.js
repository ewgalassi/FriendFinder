var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = new express.Router()

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

module.exports = router