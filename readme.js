// @2014-10-1  ilike 
// @this is a project, just to studying Node.js.

var http = require('http');

http.createServer( function (req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Welcome to the world of Node.js');
}).listen(8088, '127.0.0.1');
 console.log("Server running at Http://127.0.0.1:8088");
