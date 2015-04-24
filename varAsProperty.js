/*==============================================
=            Variable as Properties            =
==============================================*/


/**
* $ 3.10.2
* When you declare a global JavaScript variable, what you are actually doing is defining
* a property of the global object (§3.5). If you use var to declare the variable, 
* the property that is created is nonconfigurable (see §6.7), which means that it
*  cannot be deleted with the delete operator.
*
**/

var truevar = 1; // A properly declared global variable, nondeletable.
fakevar = 2;     // Creates a deletable property of the global object.
this.fakevar2 = 3; // Creates a deletable property of the global object.
delete truevar ;   // => false: variable not deleted
delete fakevar ; //  => true: variable deleted
delete this.fakevar2 // => true: variable deleted
