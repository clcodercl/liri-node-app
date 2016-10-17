var request = require('request');
var spotify = require('spotify');
var operator = process.argv[2];
var fs = require('fs');
//At the top of the liri.js file, write the code you need to grab the data from keys.js. 

var keys = require(./keys.js);
//Then store the keys in a variable.

fs.watch(keys.js, function() {
	let ls spawn('ls', ['-lh', key.js]);
	output ='';
	ls.stdout.on('data', function(chunk){
		output += chunk.tostring();
	});

	ls.on('close', function(){
});




//Make it so liri.js can take in one of the following commands:
function commands() {
  this.my-tweets = [],
  this.spotify-this-song = [],
  this.movie-this
  this.do-what-it-says
	//my-tweets

	//spotify-this-song

	//movie-this

	//do-what-it-says

// What Each Command Should Do

// node liri.js my-tweets

// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// node liri.js spotify-this-song '<song name here>'


// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to

// "The Sign" by Ace of Base
// node liri.js movie-this '<movie name here>'

// This will output the following information to your terminal/bash window:

// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// Rotten Tomatoes Rating.
// Rotten Tomatoes URL.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// node liri.js do-what-it-says