/*==========  Sparse Array  ==========*/

var a = new Array(5);
console.log(a.length);  // no element but length = 5

a = [];
console.log(a.length);  // length = 0
a[1000] = 10;
console.log(a.length);  // 1 element but length = 1001

var a1 = [,,,];  // This array is [undefined, undefined, undefined]
var a2 = new Array(3); // This array has no values at all
0 in a1  // => true: a1 has an element with index 0
0 in a2  // => false: a2 has no element with index 0
