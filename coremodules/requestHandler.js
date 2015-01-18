var fs=require("fs");
var url=require("url");

exports.home = function(request,response){
	var home = "<!DOCTYPE html>"
				+ "<html>"
				+ "<head>"
				+ "</head>"
				+ "<body> "
					+ "<h1>Welocome to Home</h1>"
					+ "</body>"
				+" </html>";

	response.write(home);
	response.end();
}