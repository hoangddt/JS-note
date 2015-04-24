var scope = "global";

function f () {
	console.log(scope);
	var scope = "local";
	console.log(scope);
}

f();