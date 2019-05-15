module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
		// arr = new Array();
		// properties = new Array();

		// split csv into array based on \n breaks
		temp_csv = csv.split(/\n/);
		// define properties based on , breaks in first line
		properties = temp_csv[0].split(/,/);

		// iterate remaining lines of csv
		for(i = 1; i < temp_csv.length; i++){
			// create a temporary array for each item of the line
			temp_arr = temp_csv[i].split(/,/);
			temp_obj = {};
			// iterate properties array
			for(j = 0; j < properties.length; j++){
				// assign corresponding value to each property
				temp_obj[properties[j]] = temp_arr[j];
			}
			// add converted object to final array
			arr[i - 1] = temp_obj;
		}
		return arr;
};
