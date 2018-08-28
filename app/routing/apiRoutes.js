var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var router = express.Router()

router.get("/api/friends", function (req, res) {
    return res.json(friends);
});

router.get("/api/friends/:friend", function (req, res) {
    var chosen = req.params.friend;

    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    return res.json(false);
});

router.post("/api/friends", function (req, res) {

    var newfriend = req.body;

    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);
});

module.exports = router