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