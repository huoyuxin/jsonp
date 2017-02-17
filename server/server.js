var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "json"
    });

    var json = {'name':'hyx'};
    var params = url.parse(request.url, true).query;

    response.end(params.callback + "(" + JSON.stringify(json) + ")");
}).listen(8012);

console.log("the server is running...");
