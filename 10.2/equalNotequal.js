var a = process.argv[2];
var b = process.argv[3];

if ((a % 7 === 0) && (b % 7 === 0)){
 	console.log("Is multiple of 7")
} else{
	console.log("Not multiple of 7")
}