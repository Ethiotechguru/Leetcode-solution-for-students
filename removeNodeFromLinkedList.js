const removeNode = (head, targetVal) => {
    //remove node which val is equal to targetVal in place
	if (head === null) return null;
	if (head.val === targetVal) return head.next;
	let prev = head;
	let current = head.next;
	while (current !== null) {
		if (current.val === targetVal) {
			prev.next = current.next;
			prev = prev.next;
			return head;
		}
		prev = current;
		current = current.next;
	}
};
