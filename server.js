/*Author:Anuj Sachan
URL: www.github.com/anujsachan1990
Website:www.anujsachan.com
this for creating server with Node Js
*/

var http = require("http");
function startServer(){
// module require for creating server
var server = http.createServer(function(request,response){
		response.writeHead(200 ,{"content-type":"text/html"});
		response.write("<h1>IT Works...</h1>");
		response.write("<h3>Welcome to very first Node Server</h3>");
		response.end();
});
server.listen(5000);
console.log("Server is now listen on http://localhost:5000");
}
exports.start = startServer;
