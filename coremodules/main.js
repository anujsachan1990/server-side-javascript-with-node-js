/*Author:Anuj Sachan
URL: www.github.com/anujsachan1990
Website:www.anujsachan.com
Main.js
*/
var server = require("../server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var paths = [];
var context = ""

paths["/"] = requestHandler.home;
//paths[context+"/home.html"] = requestHandler.home;
server.start(router,paths);