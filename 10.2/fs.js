var fs = require('fs');

fs.writeFile("movies.txt", "50 First Dates, brolly, Heat ", function(err){
	if (err){
		console.log('error:', + err);
	}
	console.log('The movies.txt file has content now!');
});