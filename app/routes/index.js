var redis = require('redis');

var client = redis.createClient();

exports.index = function(req, res){
  res.render('index', { title: 'Some kind of title' })
};


exports.user = function(req, res) { 
	res.send('Welcome to profile of ' + req.params.user + '!'); 
}