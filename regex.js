var a = "This is st4ring to test: 1, 2, 3",
	pattern = /\b\d\b/g;

console.log(pattern.test(a));
console.log(a.search(pattern));
console.log(a.match(pattern));
console.log(a.replace(pattern, "just"));
console.log(a.split(/\D+/));