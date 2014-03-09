var http = require("http");

function onRequest(request, responce)	{
	console.log("Request received.");
	responce.writeHead(200, {"Content-Type": "text/plain"});
	responce.write("Hello World");
	responce.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started...YAY!");
