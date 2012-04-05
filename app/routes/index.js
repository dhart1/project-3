var redis = require('redis');

var client = redis.createClient();

exports.index = function(req, res){
  res.render('index', { title: 'Some kind of title' })
};


exports.user = function(req, res) { 
	res.send('awesome.ejs',{title:'Awesome!'}); 
}

exports.user = function(req, res) { 
	res.send('cool.ejs',{title:'Cool!'}); 
}

exports.user = function(req, res) { 
	res.send('rad.ejs',{title:'Rad!'}); 
}

exports.user = function(req, res) { 
	res.send('gnarly.ejs',{title:'Gnarly!'}); 
}

exports.user = function(req, res) { 
	res.send('groovy.ejs',{title:'Groovy!'}); 
}