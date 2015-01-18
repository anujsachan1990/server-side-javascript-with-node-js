/*Author:Anuj Sachan
URL: www.github.com/anujsachan1990
Website:www.anujsachan.com
Router Module*/

var url = require("url");
exports.route = function(request,response,paths){
	var path = url.parse(request.url).pathname;
	console.log("request path for :" + path);
	if(typeof paths[path] === 'function'){
		paths[path](request,response);
	}else{
		response.writeHead(404,{'Content-Type':'text/html'});
		response.write("<h1>Page Not Found!</h1>");
		response.write("<h1>Details are below....</h1>");
		response.write("<p>URL : "+request.url+"</p>");
		response.end();	
	}
}