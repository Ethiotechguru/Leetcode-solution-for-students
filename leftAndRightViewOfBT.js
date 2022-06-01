const treeLevels = (root) => {
	if (root === null) return [];
	let outPut = [];
	let stack = [{ node: root, level: 0 }];
	while (stack.length > 0) {
		let { node, level } = stack.pop();
		if (!outPut[level]) {
			outPut[level] = [];
		}
		if (node.val) {
			outPut[level].push(node.val);
		}

		let lev = level + 1;
		if (node.right !== null) {
			let nod = { node: node.right, level: lev };
			stack.push(nod);
		}
		if (node.left !== null) {
			let nod = { node: node.left, level: lev };
			stack.push(nod);
		}
	}
	return outPut;
};

let leftView = [];
let rightView = [];
let arrLeftView = treeLevels(unFromArr.root);
for (let i = 0; i < arrLeftView.length; i++) {
	let val = arrLeftView[i][0];
	leftView.push(val);
}
for (let i = 0; i < arrLeftView.length; i++) {
	let val = arrLeftView[i][arrLeftView[i].length - 1];
	rightView.push(val);
}
