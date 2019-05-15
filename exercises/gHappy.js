module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	
	// iterate string as an array of chars
	for (i = 0; i < str.length; i++){
		// if char is g, check that neither previous nor following char is also g, return false
		if (str[i] == 'g' && str[i - 1] != 'g' && str[i + 1] != 'g') return false;
	}
	// else return true
	return true;
};
