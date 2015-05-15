var ob = {
	a: 10,
	b: 100
};

var random = {
	get octa() {
		return Math.random()*8;
	}
};

//{ value: 1, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor({'x':1}, 'x'));
//{ value: 1, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(ob, 'a'));

//{ get: [Function: octa],  set: undefined,  enumerable: true,  configurable: true }
console.log(Object.getOwnPropertyDescriptor(random, 'octa'));

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x");
// undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited