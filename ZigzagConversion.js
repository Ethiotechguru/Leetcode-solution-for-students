var convert = function (s, numRows) {
	s = s.split("");
	let arr = [];
	let j = 0;
	while (j < numRows) {
		arr.push([]);
		j++;
	}
	while (s.length !== 0) {
		let i = 0;
		while (i < numRows) {
			arr[i].push(...s.splice(0, 1));
			i++;
		}
		let signal = numRows - 2;
		while (signal > 0) {
			arr[signal].push(...s.splice(0, 1));
			signal--;
		}
	}
	let Arr = [];
	arr.forEach((ele) => {
		Arr = [...Arr, ...ele];
	});
	let str = Arr.join("");
    console.log(str)
	return str;
};
//Input: (s = "PAYPALISHIRING"), (numRows = 3);
//Output: "PAHNAPLSIIGYIR";
convert("PAYPALISHIRING",3);