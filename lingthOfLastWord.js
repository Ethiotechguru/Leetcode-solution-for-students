var lengthOfLastWord = function (s) {
	let i = s.length - 1;
	let word = "";
	while (i >= 0 && s[i] === " ") {
		i--;
	}
	while (i >= 0 && s[i] !== " ") {
		word = word + s[i];
		i--;
	}
	return word.length;
};
