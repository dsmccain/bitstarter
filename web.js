var express = require('express');
var filesys = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var buffer = new Buffer(filesys.readFileSync("index.html"));
	response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
