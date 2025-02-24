// Question 1
function moveTen(s) {
	let alpha = "abcdefghijklmnopqrstuvwxyz".repeat(2).split("");
	return s.split("").map((e, i) => alpha[alpha.indexOf(e) + 10]);
}

console.log(moveTen("testcase"));
console.log(moveTen("codewars"));

// Question 2
function vaporcode(str) {
	return str
		.replaceAll(" ", "")
		.split("")
		.map((e) => e.toUpperCase() + "  ")
		.join("")
		.trim();
}

console.log(vaporcode("Lets go to the movies"));
console.log(vaporcode("Le"));

// Question 4
function wordsToMarks(str) {
	return str.split("").reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
}

console.log(wordsToMarks("ab"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("family"));

// Question 5

function oddOne(arr) {
	return arr.findIndex((e) => e % 2);
}

console.log(oddOne([2, 4, 6, 7, 10]));
console.log(oddOne([2, 4, 6, 10]));
console.log(oddOne([2, 16, 98, 10, -13, 10]));
