var d = new Date();
console.log(d instanceof Date); // true
console.log(d instanceof Object); // true
console.log(d instanceof Number); // false

var arr = [1,4,8];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof RegExp); // false