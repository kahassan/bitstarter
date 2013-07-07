var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
buf = new Buffer(256);
 var fs = require('fs');
 fs.readFileSync('/home/ubuntu/bitstarter/index.html')
 buf.toString(fs);

 response.send(buf);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
