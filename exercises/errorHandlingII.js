module.exports.run = async function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/
	// declare vars
	const axios = require('axios');
	var message;

	// await axios.get completion before returning message
	await axios.get(url)
		// .then(function (response){
		// 	message = 'No issues here!';
		// })
		.catch(function (error){
			// get error message and append to Error:
			message = 'Error: ' + error.message;
		});
	
	// return message
	return message;
};
