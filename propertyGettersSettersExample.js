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

/*=======================================
=            more of example            =
=======================================*/

// This object generates strictly increasing serial numbers
var serialnum = {
	// This data property holds the next serial number.
	// The $ in the property name hints that it is a private property.
	$n: 0,

	// Return the current value and increment it
	get next() { return this.$n++; },

	// Set a new value of n, but only if it is larger than current
	set next(n) {
	if (n >= this.$n) this.$n = n;
		else throw "serial number can only be set to a larger value";
};

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
	get octet() { return Math.floor(Math.random()*256); },
	get uint16() { return Math.floor(Math.random()*65536); },
	get int16() { return Math.floor(Math.random()*65536)-32768; }
};

/*-----  End of more of example  ------*/

