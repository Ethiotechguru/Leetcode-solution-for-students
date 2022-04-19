module.exports.createNode = function createNode(val) {
	return {
		val: val,
		next: null,
	};
};

module.exports.createLinkedList = (arr) => {
	let node = createNode(arr[0]);
	let dummyNode = node;
	for (let i = 1; i < arr.length; i++) {
		node.next = createNode(arr[i]);
		node = node.next;
	}
	console.log(dummyNode);
	return dummyNode;
};
