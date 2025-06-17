const http = require('http');
const fs = require('fs');

const PORT = 8080;

http.createServer(function (request, response) {
    console.log('Attempting to serve to ' + request.headers.host);
    fs.readFile(
        "public/index.html", 
        function(error, content) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
            console.error(error || "Success");
        }
    );

}).listen(PORT);
console.log("Server running on port: " + PORT);
console.log("Look here: http://127.0.0.1:" + PORT);
console.log("Or here: http://localhost:" + PORT + "/");

