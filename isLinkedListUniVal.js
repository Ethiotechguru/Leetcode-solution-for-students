const isUnivalueList = (head) => {
    //check if all values in the linked list are equal;
    //if Not return false
    //if all values are equal return true;
	if (head.next === null) {
		return true;
	}
	if (head.val !== head.next.val) {
		return false;
	}
	return isUnivalueList(head.next);
};
