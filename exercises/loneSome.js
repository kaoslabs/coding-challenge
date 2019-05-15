module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
	// assign temportary values for a, b, c
	temp_a = a;
	temp_b = b;
	temp_c = c;

	// compare given a, b, c and set temp values to 0 if there is a match
	if (a == b) temp_a = temp_b = 0;
	if (a == c) temp_a = temp_c = 0;
	if (b == c) temp_b = temp_c = 0;

	// return sum of temp values
	return temp_a + temp_b + temp_c;
};
