
module.exports.run = function(x, y) {
/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.
*/
	// 2dArr given
	const twoDArray = [[0,  4,  2,  1],
					   [3, -1,  1,  0],
					   [0,  0,  2,  3],
		   			   [1,  3, -3,  0]];
	// start sum at 0
	sum = 0;

	// max x & y out at array dimensions
	if (x > twoDArray[0].length) x = twoDArray[0].length;
	if (y > twoDArray.length) y = twoDArray.length;

	// iterate rows and columns up to y and x, respectively
	for (r = 0; r <= y; r++){
		for (c = 0; c <= x; c++){
			// add value to sum
			sum += twoDArray[r][c];
		}
	}

	// return sum
	return sum;
};


