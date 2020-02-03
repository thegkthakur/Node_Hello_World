var http = require("http");
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'});
    res.write("<h1 style = 'color:red'>Hello world</h1>");
    res.end();
});
server.listen(8080);
console.log("server listening port number 8080");