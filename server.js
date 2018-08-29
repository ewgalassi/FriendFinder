var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");
var friends = require("./app/data/friends");

var app = express();

var PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/friends", api);

app.use("/", router);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});