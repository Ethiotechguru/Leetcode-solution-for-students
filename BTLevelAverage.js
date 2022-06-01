const levelAverages = (root) => {
	if (root === null) return [];
	let stack = [{ node: root, level: 0 }];
	let outPut = [];
	while (stack.length > 0) {
		let { node, level } = stack.pop();
		if (!outPut[level]) {
			outPut[level] = [];
		}
		if (node.val || node.val === 0) {
			outPut[level].push(node.val);
		}
		let lev = level + 1;
		if (node.left !== null) {
			let nod = { node: node.left, level: lev };
			stack.push(nod);
		}
		if (node.right !== null) {
			let nod = { node: node.right, level: lev };
			stack.push(nod);
		}
	}
	let average = [];
	for (let ele of outPut) {
		let sum = ele.reduce((a, b) => a + b, 0);
		average.push(sum / ele.length);
	}
	return average;
};
