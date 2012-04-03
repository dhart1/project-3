/**
 * This is the entry point for our JavaScript program
 */

function main() {
	$("#submit_button").click(function(){
		var searchText = $("#input_text").val();
		var word1_input = $("#word1_text").val();
		var word2_input = $("#word2_text").val();
		var word1 = new RegExp(word1_input,'i');
		var word2 = new RegExp(word2_input,'i');
		var word1_count = 0;		
		var word2_count = 0;
		$("#result_1").empty();
		$("#result_2").empty();
		$("#result_1").append(word1_input);
		$("#result_2").append(word2_input);

	 	var s = new Spotter("twitter.search",
					{q:searchText, period:60},
					{buffer:true, bufferTimeout:750}
					);
		var object_array = [];		
		s.register(function(tweet){
			var profile_image="<img src='"+tweet.profile_image_url+"'/>";
			var object=$("<p class='red'>"+profile_image + tweet.text +"</p>");
			object.hide();
			$("#tweets").prepend(object);
			object.slideDown();
			
			if(tweet.text.match(word1)) {
				word1_count++;
			}
			$("#twitter_hits1").empty();
			$("#twitter_hits1").append(word1_count);
			
			if(tweet.text.match(word2)) {
				word2_count++;
			}
			$("#twitter_hits2").empty();
			$("#twitter_hits2").append(word2_count);
			
			$("#tweets p:gt(5)").fadeOut(200, function (){
				$("#posts p:gt(5)").remove();
			});
		});	
		s.start();
	});


		$("#facebook_button").click(function(){
			var searchText = $("#input_text").val();
			var word1_count=0;
			var word2_count=0;
			var word1_input = $("#word1_text").val();
			var word2_input = $("#word2_text").val();
			var word2 = new RegExp(word2_input,'i');
			var word1 = new RegExp(word1_input,'i');
			$("#result_1").empty();
			$("#result_2").empty();
			$("#result_1").append(word1_input);
			$("#result_2").append(word2_input);
			
			
		 	var f = new Spotter("facebook.search",
						{q:searchText, period:60},
						{buffer:true, bufferTimeout:750}
						);
			var object_array = [];
			f.register(function(status){
				var profile_image="<img src='"+status.profile_image_url+"'/>";
				var object=$("<p class='blue'>"+status.profile_url+profile_image+status.message+"</p>");
				object.hide();
				$("#posts").prepend(object);
				object.slideDown();
				
				if(status.message.match(word1)) {
					word1_count++;
				}
				$("#facebook_hits1").empty();
				$("#facebook_hits1").append(word1_count);

				if(status.message.match(word2)) {
					word2_count++;
				}
				$("#facebook_hits2").empty();
				$("#facebook_hits2").append(word2_count);
				
				$("#posts p:gt(5)").fadeOut(200, function (){
					$("#posts p:gt(5)").remove();
				});
			});
			f.start();	
		});

}

$(document).ready(function() {
	$("#input_text").val("");
	$("#word1_text").val("");
	$("#word2_text").val("");
	main();
});
