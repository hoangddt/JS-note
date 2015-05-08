/*=========================================================================
=            Property conflict name when use accessor property            =
=========================================================================*/

/**
*
* When create a object with object literal syntax,
* it caught error: "Object literal may not have data and 
* accessor property with the same name".
* But when creat a object via Function syntax, it don't
* have any error
*
**/


/**
 * Object created with function style
 * that have data property and accessor property with same name
 */
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

/**
 * o2 is created with object literal style
 * caught conflict with data and accessor property 
 * have same name `r`
 */
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