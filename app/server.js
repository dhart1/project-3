var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'html'});
    res.end('<p>awesomeCount:</p>' + responses[0]);

}).listen(3000);

console.log('Server running on port 3000');