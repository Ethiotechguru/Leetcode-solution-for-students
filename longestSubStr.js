//Given a string s, find the length of the longest substring without repeating characters.
const lengthOfSubstr = (s) => {
    if(s.length<2){
        console.log(s.length)
        return s.length;
    }
	let j = 0;
	let len = 0;
	let currentLen = 0;
	let str = "";
	let currentStr = "";
	let map = {};
	s = s.split("");
	while (j < s.length) {
		if (!map[s[j]]) {
			map[s[j]] = [s[j],j];
			str = str + s[j];
			len++;
			j++;
		} else {
			if (len > currentLen) {
				currentLen = len;
				currentStr = str;
			}
            let indx = map[s[j]][1];
			map = {};
			str = "";
			len = 0;
			s=s.slice(indx+1);
            j=0;
			map[s[j]] = [s[j], j];
			str = str + s[j];
			len++;
			j++;
		}
	}
    currentLen = len>currentLen ? len : currentLen;
    return currentLen;
};
lengthOfSubstr("au");