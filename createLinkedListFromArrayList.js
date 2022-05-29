class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
const createLinkedList = (values) => {
	if (values.length === 0) return null;
	let node = new Node(values[0]);
	let dummy = node;
	for (let i = 1; i < values.length; i++) {
		let newNode = new Node(values[i]);
		node.next = newNode;
		node = node.next;
	}
	return dummy;
};
const createLinkedListRecursive = (values) => {
    if(values.length === 0) return null;
    let node = new Node(values[0]);
    node.next = createLinkedList(values.slice(1));
    return node;
};
