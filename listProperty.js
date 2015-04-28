var a = {x: 1, y: 2, z: 3},
	b = {},
	c = Object.create({a:10, b:14, x:15});

describeObj(a);
describeObj(b);
describeObj(c);

function describeObj (o) {
	console.log("---- Object "+ o.name +" and its properties: ")
	console.log(o);
	listProperty(o);
	listOwnProperty(o);
	console.log("\n")
}

/**
 * List all property of an given object
 */
function listProperty (o) {
	if (typeof o !== "object") throw TypeError();
	console.log("All property of given object: ")
	for (p in o)
		console.log(p);
}
/**
 * juct list the property of its own, not inherit
 */
function listOwnProperty (o) {
	if (typeof o !== "object") throw TypeError();
	console.log("All own property of given object: ");
	for (p in o)
	{
		if (!o.hasOwnProperty(p)) continue;
		console.log(p);
	}
}