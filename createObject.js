/**
 * Object create with object literal
 */
var a = {x:1, y:2, z:3},
	b = {};
console.log("Object create with object literal: ");
console.log(a); // output: { x: 1, y: 2, z: 3 }
console.log(b); // output: {}

/**
 * Object create with new
 */

var c = new Object(),
	d = new Array();

console.log("Object create with new: ");
console.log(c); // {}
console.log(d); // []

/**
 * Object created with Object.create()
 * Only in ECMASript 5
 */

var obj = Object.create({x:1, y:10, z:12});  // inherits properties x and y and z
console.log("Object create with Object.create(): ");
console.log(obj);   // output: {}  <---------
console.log(obj.y); // output: 10
console.log(obj.toString()); // [object Object]

var obj2 = Object.create(null);  // inherits nothing
console.log(obj2);   // output: {}  <---------
console.log(obj2.y); // output: undefined
// console.log(obj2.toString());  Error because it inherit no properties or methods