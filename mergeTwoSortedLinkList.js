class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let helperFunc = (h1, h2, node) => {
	if (h1 === null) node.next = h2;
};
const def = (dummy, node, h1, h2) => {
	if (h1 === null || h2 === null) return dummy.next;
	if (h1.val <= h2.val) {
		node.next = h1;
		node = node.next;
		h1 = h1.next;
	} else {
		node.next = h2;
		node = node.next;
		h2 = h2.next;
	}
	helperFunc(h1, h2, node);
	helperFunc(h2, h1, node);
	return def(dummy, node, h1, h2);
};

const mergeLists = (head1, head2) => {
	let node = new Node("null");
	let dummy = node;
	let h1 = head1;
	let h2 = head2;
	return def(dummy, node, h1, h2);
};
