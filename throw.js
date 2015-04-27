function devide (a, b) {
	if (b == 0) throw "Khong the chia cho 0";
	return a/b;
}

try {
	devide(1,0);
}
catch (ex) {
	console.log(ex);
}
/**
 * If there are no try catch around the code
 * It will be throw an error to user
 */
devide(3,0);