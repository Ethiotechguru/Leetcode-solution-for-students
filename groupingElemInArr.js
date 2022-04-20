const arr = [
	"kuss",
	"eat",
	"tea",
	"sukk",
	"cat",
	"rat",
	"art",
	"man",
	"amn",
	"nam",
	"tac",
	"act",
	"pam",
];
let {bigData} = require('./BigData');
// console.log(bigData)
//return Value [['kuss'],['eat', 'tea'],['sukk'],['cat', 'tac', 'act'],['rat', 'art'],['man', 'amn', 'nam'],['pam']]

function PalindromeGrouping(arr) {
	let timeStart = Date.now();
	let groupedPalindrome = [];
	let i = 0;
	while (i < arr.length) {
		
		let j = i + 1;
		let temp = [arr[i]];
		let first = arr[i].split("");
		while (j < arr.length) {
			let map = {};
			let second = arr[j].split("");
			if (
				arr[i].length !== arr[j].length &&
				new Set(first) !== new Set(second)
			){
				j++;
			} else {
				for (let k = 0; k < first.length; k++) {
					if (!map[first[k]]) {
						map[first[k]] = 1;
					} else {
						map[first[k]]++;
					}
				}
				while (second.length > 0) {
					if (map[second[0]] && map[second[0]] > 0) {
						map[second[0]]--;
						second.splice(0, 1);
					} else {
						break;
					}
				}
				if (second.length === 0) {
					temp.push(arr[j]);
					arr.splice(j, 1);
				} else {
					j++;
				}
			}
		}
		groupedPalindrome.push(temp);
		i++;
	}
	console.log(groupedPalindrome);
    console.log(Date.now() - timeStart);
}

PalindromeGrouping(bigData);

