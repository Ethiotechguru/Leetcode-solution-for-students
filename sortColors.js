const sortColors = (nums)=>{
	let start = 0;
	let tracker = 0;
	let end = nums.length - 1;
	while (tracker <= end && start < end) {
		if (nums[tracker] === 0) {
			nums[tracker] = nums[start];
			nums[start] = 0;
			start++;
			tracker++;
		} else if (nums[tracker] === 2) {
			nums[tracker] = nums[end];
			nums[end] = 2;
			end--;
		} else {
			tracker++;
		}
	}
};
