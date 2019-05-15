module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/

	// declare vars
	const axios = require('axios');
	var arr = [],
		promises = [];
	
	// iterate over movies to create a promises array
	movies.forEach(function(movie){
		promises.push(axios.get(movie));
	});
	
	// axios.all will keep promises in order
	// await will wait until axios.all promise completed before returning arr
	await axios.all(promises)
		.then(function(results){
			results.forEach(function(result){
				// create object with Title, Year, Genre
				obj = {
					Title: result.data.Title,
					Year: result.data.Year,
					Genre: result.data.Genre
				};
				// add object to end of arr
				arr.push(obj);
			});
		});

	// return arr
	return arr;
};