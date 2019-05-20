module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	// add blank to end of str so that regex match works properly
	str = str + ' ';
	// use regex to return a solo 'g'
	var g_arr = str.match(/[^g]g[^g]/);
	// return false if g_arr has a length
	if (g_arr) return false;
	// else return true
	return true;
};