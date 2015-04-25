/*====================================================================
=            Function Expression VS. Function Declaration            =
====================================================================*/
/**
 * function declarations loads before any code is executed.
 * While function expressions loads only when 
 * the interpreter reaches that line of code.
 */
funcOne();
// funcTwo(); // Error
alert("alert");
function funcOne () {
	console.log(funcOne.name);
}
var xyz = funcOne;
console.log(xyz.name); // "funcOne"


var funcTwo = function () {
	console.log("Function Expression");
}
funcTwo(); // Can call
console.log(funcTwo.name); // ""

var funThree = function anotherFunc () {
	/**
	*
	* funThress visible here
	* anotherFunc visible here
	*
	**/
	
}

/**
 * funThree visible
 * anotherFunc invisible here
 */