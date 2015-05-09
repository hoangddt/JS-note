/*===================================================
=            Defined setters and getters            =
===================================================*/

var p = {
	// regular read/write property
	x : 1.0,
	y : 1.0,

	// r is a read/write accessor property
	// with getter and setter
	
	get r() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	},
	set r(newValue) {
		var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
		var ratio = newValue/oldvalue;
		this.x *= ratio;
		this.y *= ratio;
	},

	// theta is a read-only accssor property with getter only
	get theta() {
		return Math.atan2(this.y, this.x);
	}

};


/*===============================================
=            Use getters and setters            =
===============================================*/

console.log(p.r); // call setter r
p.r = 10;         // righ-hand value will be passed to parameter in setter method


/*===================================
=            Inheritance            =
===================================*/


// getter and setter can be inherited
var q = Object.create(p);

console.log(p);
console.log(q);
// create p's own data property
// if not, q.x and q.y will refr to p.x and p.y
q.x = 2;
q.y = 2;
console.log(q);
console.log(q.r);