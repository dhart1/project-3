var redis = require('redis');

var client = redis.createClient();

exports.index= function(req, res) {
	client.get('awesome', function(err, count) {

		if (err) console.log(err);
		else {
			res.render('word/awesome', {awesomeCount:count});
		}
	});

};
