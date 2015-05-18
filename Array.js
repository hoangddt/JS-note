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

/*==========  Array Length  ==========*/

a = [1,2,3,4,5];
a.length = 3;  // a == [1,2,3]
a.length = 0;  // delete all elements a == []
a.length = 5;  // a = 5 but no element
console.log(a);

a = [1,2,3,4,5];
Object.defineProperty(a, 'length', {writable:false});
a.length = 0;
a[5] = 6;
console.log(a);
console.log(a.length);