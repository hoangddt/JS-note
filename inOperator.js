var point = {
	x: 1,
	y: 2
};

console.log("x" in point); // true
console.log("z" in point); // false
console.log("toString" in point); // true

var data = [4,7,10];
console.log("0" in data); // true
console.log(1 in data);   // true
console.log(3 in data);   // true