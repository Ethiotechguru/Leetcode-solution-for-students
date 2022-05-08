var maxArea = function (height) {
	let maxWater = -Infinity;
	let left = 0;
	let right = height.length - 1;
	while (left < right) {
		let width = right - left;
		let minHeight = Math.min(height[left], height[right]);
		let val = minHeight * width;
		if (maxWater < val) {
			maxWater = val;
		}
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return maxWater;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
