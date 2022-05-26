class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const insertNode = (head, value, index) => {
	// insert node at the given index head index is 0 and index<=  node length;
	let node = new Node(value);
	if (index === 0) {
		node.next = head;
		head = node;
		return head;
	}
	let i = 0;
	let prev = null;
	let current = head;
	while (i < index) {
		prev = current;
		current = current.next;
		i++;
	}
	node.next = current;
	prev.next = node;
	return head;
};
