const twoSum =  (numbers, target)=> {
	let start = 0;
	let end = numbers.length - 1;
	if (numbers.length <= 1) {
		return [];
	}
	while (start < end) {
		let num = numbers[start] + numbers[end];
		if (num > target) {
			end--;
		} else if (num < target) {
			start++;
		} else {
            console.log([start+1, end+1])
			return [start + 1, end + 1];
		}
	}
	return null;
};
twoSum([2,7,11,15],9)
