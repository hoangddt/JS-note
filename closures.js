var scope = "global scope";
function checkscope() {
	var scope = "local scope";
	function f() { return scope; }
	return f;
}
console.log(checkscope()());   // "local scope"