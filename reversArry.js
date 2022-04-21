function reversStr(str) {
	let start = 0;
	let end = str.length - 1;
	while (start < end) {
		let temp = str[start];
		str[start] = str[end];
		str[end] = temp;
		start++;
		end--;
	}
	console.log(str);
}
reversStr(['h','e','l','l','o'])