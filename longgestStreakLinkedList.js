const longestStreak = (head) => {
	let max = 0;
	let current = head;
	let prev = head;
	let i = 0;
	let j = 0;
	while (current !== null && prev !== null) {
		if (current.val === prev.val) {
			current = current.next;
			j++;
		} else {
			if (max < j - i) {
				max = j - i;
			}
			prev = current;
			current = current;
			i = j;
		}
	}
	max = max < j - i ? j - i : max;
	return max;
};
// 5 -> 5 -> 7 -> 7 -> 7 -> 6 => should return 3 since 7 repeated 3 times continuously more than other numbers occurrence
// 9 -> 9 -> 1 -> 9 -> 9 -> 9 => should return 3 since 9 repeated 3 times continuously