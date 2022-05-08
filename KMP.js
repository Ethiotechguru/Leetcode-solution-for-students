function buildPrefixTable(s) {
	const table = [0];
	let i = 1; // location in s
	let j = 0; // length of repeating prefix and suffix
	while (i < s.length) {
		// If characters match, then the repeating prefix-suffix pair
		// gets longer by 1 character
		if (s[i] === s[j]) {
			j += 1;
			table[i] = j;
			i += 1;
		} else if (j > 0) {
			// If the characters do no match, and we have repetition
			// in suffix and prefix, we still need to check
			// the character after the prefix
			j = table[j - 1];
		} else {
			// When the characters don't match and no repeating
			// suffix-prefix pair, then we can move on
			table[i] = 0;
			i += 1;
		}
	}
	return table;
}
buildPrefixTable("ssasamussasmusamuelb");

