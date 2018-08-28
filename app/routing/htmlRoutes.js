var http = require("http");
var fs = require("fs");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url
    switch (path) {
        case "/survey":
            displayPage(path, req, res);
            break;
        default:
            displayPage("/index", req, res);
            break;
    };
};

function displayPage(url, req, res) {
    fs.readFile(__dirname + url + ".html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});  