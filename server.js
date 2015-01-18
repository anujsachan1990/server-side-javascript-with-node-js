/*Author:Anuj Sachan
URL: www.github.com/anujsachan1990
Website:www.anujsachan.com
this for creating server with Node Js
*/

var http = require("http");

function startServer(router,paths){
// module require for creating server
var server = http.createServer(function(request,response){
		router.route(request,response,paths);
});
server.listen(5000);
console.log("Server is now listen on http://localhost:5000");
}
exports.start = startServer;
