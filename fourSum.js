var fourSum = function (nums, target) {
	let map = {};
	let output = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i <= nums.length - 4; i++) {
		if (nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j <= nums.length - 3; j++) {
			let left = j + 1;
			let right = nums.length - 1;
			while (left < right) {
				let arr = [nums[i], nums[j], nums[left], nums[right]];
				let sum = arr.reduce((a, b) => a + b, 0);
				if (sum > target) {
					right--;
				} else if (target === sum) {
					let key = arr.sort((a, b) => a - b).join("");
					if (!map[key]) {
						output.push(arr);
						map[key] = true;
					}
					left++;
				} else {
					left++;
				}
			}
		}
	}
	return output;
};
