var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log("All object is: (o, p, q) ");
console.log(o);
console.log(p);
console.log(q);
console.log("inherit is : ")
console.log(q.x + q.y);
console.log("Change q.x = 10:  ");
q.x = 10;
console.log("All object is: (o, p, q) ");
console.log(o);
console.log(p);
console.log(q);
console.log(q.prototype);  // undefined



/*==========================================================
=            Object referene to parent property            =
==========================================================*/

var a = {
	x : 1,
	y : 1
};
var b = Object.create(a);
console.log(a);
console.log(b);
// b has x y but that reference to parent object
console.log(b.x);  // 1
a.x = 2;           // change a.x to 2
console.log(b.x);  // b.x equal 2 because that refer to parent object
b.y = 4;           // that will create property of b, y now belong to b, no longer refer to parent y
a.y = 2; // change a to 2
console.log(b.y);  // still 4, not effect by a any more






/**
 * inherit() create and return a object that inherit p object
 * @param  {[object, function]} p [object that will be inherit]
 * @return {[object]}   [object that is inherited from p]
 */
function inherit (p) {
	if (p==null) throw TypeError();  // p must be not null
	// If Object.create is defined, use it
	if (Object.create)
		return Object.create(p);

	// Otherwise, use the classic way
	var t = typeof p;
	if (t !== "function" && t !== "object") throw TypeError();
	function f () {};
	f.prototype = p;
	return new f();
}