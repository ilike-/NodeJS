#2014-10-1  ilike 
#this is a project, just to studying Node.js.

var http = require("http");

http.createServer( function (req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end("Welcome to the world of Node.js");
}).listen(8088, '106.39.255.99');
consloe.log("Server running at Http://"106.0.0.1:8088");
