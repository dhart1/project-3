var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');

function TwitterWorker(terms) {
	var client = redis.createClient();

/*client.exists('awesome', function(error, exists) {
	if (error) {
		console.log('ERROR: '+error);
	} else if(!exists) {
		client.set('awesome',0);
	};
});*/


var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

var update = function(terms) {
client.incr(key, function(err, result) {
	if(err) {
		console.log('ERROR: ' + err);
	} else {
	var message = {key:key, count:result};
		client.publish('update', JSON.stringify(message));
		}
	});
};

/*t.stream(
    'statuses/filter',
    { track: ['awesome', 'cool', 'rad', 'gnarly', 'groovy'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);

			if(tweet.text.match(/awesome/)) {
				client.incr('awesome');
			};
     	});
 	});*/

	 t.stream(
		'statuses/filter',
		{ track: [terms] },
		function(stream) {
			stream.on('data', function(tweet) {
				try{
					if (tweet.entities.urls[0].expanded_url != " "){
						url = tweet.entites.urls[0].expanded_url;
					}
					else if (tweet.entities.urls[0].url != " "){
						url = tweet.entities.urls[0].url;
						}
						console.log(url);
						client.zincrby(word, 1, url);
					}
					catch (error){
					}
	            });
			}
	    );
	};

	module.exports = TwitterWorker;
	