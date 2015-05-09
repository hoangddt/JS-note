var o = {
	r : 1,
	set setR(value) {
		if (value < 5)
			this.r = value;
		else {
			console.log("Value must less than 5");
			this.r = 0;
		}
		return this.r;
	},
	get getR() {
		return this.r;
	}
};

var o2 = {
	r: 1,
	set r(value) {
		if (value < 10) {
			console.log("Assign " + value + " to r");
			this._r = value;
		} else{
			console.log("value must less than 10");
		};
		return;
	},
	get r() {
		return this._r;
	}
}

console.log(o);
console.log(o.r);
o.r = 10;
o.setR = 10;
// console.log(o.setR(2));
console.log(o.getR);
console.log(o.r);
console.log(o);


console.log("COme with properties same name with getter and setter");
console.log(o2);
o2.r = 4;
console.log(o2);
o2.r = 20;
console.log(o2.r);
o2.$r = 100;
console.log(o2);


function Field(val){
    this.value = val;
}
 
Field.prototype = {
    get value(){
        return this._value;
    },
    set value(val){
    	if (typeof val === "string")
    		console.log("the string was passed");
        this._value = val;
    }
};

var f = new Field("thisField");
console.log(f);
f.value;
console.log(f);
f.value = "hehe";
console.log(f);