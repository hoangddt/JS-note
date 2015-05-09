/*================================================
=            Implement Encapsulations            =
================================================*/

/**
 * They allow you to bind special functions to an object 
 * that look like normal object properties, 
 * but actually execute hidden functions instead.
 */

/*-----  Case 1  ------*/

function Field(val){
    var value = val;
   
    this.__defineGetter__("value", function(){
        return value;
    });
   
    this.__defineSetter__("value", function(val){
        value = val;
    });
}

/*-----  Case 2: use setters and getters  ------*/

function Field(val){
    this.value = val;
}
 
Field.prototype = {
    get value(){
        return this._value;
    },
    set value(val){
        this._value = val;
    }
};

// Both has the same result like this
var field = new Field("test");
field.value
// => test
field.value = "test2";
field.value
// => "test2"