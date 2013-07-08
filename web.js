var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
 var fs = require('fs');
 fs.readFileSync('./index.html','utf8');
 var array = fs.toString();
 response.send(array);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
