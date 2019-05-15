module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	// use regex to return array of all consecutive sets of g
	g_arr = str.match(/g+/g);
	// iterate each set
	for (g of g_arr){
		// return false if any set has only one g
		if (g.length == 1) return false;
	}
	// else return true
	return true;
};
