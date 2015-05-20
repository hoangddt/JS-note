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


/**
 * As noted in §5.3.2, function declaration statements are not true statements,
 *  and the ECMAScript specification only allows them as top-level statements. 
 *  They can appear in global code, or within other functions, 
 *  but they cannot appear inside of loops, conditionals, or try/catch/finally or
 *  with statements. Note that this restriction applies only to 
 *  functions declared as statements. Function definition expressions 
 *  may appear anywhere in your JavaScript code.
 */