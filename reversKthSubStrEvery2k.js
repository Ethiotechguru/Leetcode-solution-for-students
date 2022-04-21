/*Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
*/ 
var reverseStr = function (s, k) {
	s = s.split("");
	let len = s.length - 1;
	let i = 0;
	let idx = 0;
	while (i < s.length) {
		if (i % (2 * k) === 0 && k <= i - len - 1) {
			let start = i;
			let end = i + (k - 1);
			while (start < end) {
				let temp = s[start];
				s[start] = s[end];
				s[end] = temp;
				start++;
				end--;
			}
		} else if (i % (2 * k) === 0 && k > i - len - 1) {
			let start = i;
			let end = i + (k - 1);
			while (start < end) {
				let temp = s[start];
				s[start] = s[end];
				s[end] = temp;
				start++;
				end--;
			}
		}
		i++;
	}
    console.log(s.join(''))
	return s.join("");
};
reverseStr("abcdef", 8);