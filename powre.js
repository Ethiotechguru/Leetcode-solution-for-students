//mplement pow(x, n), which calculates x raised to the power n (i.e., xn).
var myPow = function (x, n) {
	if (Math.abs(x ** n) < 10 ** 4) {
		return x ** n;
	}
	let num = x ** n;
	let n2 = num.toString();
	if (n2.includes(".")) {
		let val = n2.slice(0, 9);
		console.log(val);
		return +val;
	}
	return null;
};
//8.88023, 3
myPow(8.88023, 3);
