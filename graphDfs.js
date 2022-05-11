const graph = {
	a: ["b", "c"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

const dfsIterative = (graph, source) => {
	let stack = [source];
	while (stack.length > 0) {
		let current = stack.pop();
		console.log(current);
		if (graph[current]) {
			for (let neighbor of graph[current]) {
				stack.push(neighbor);
			}
		}
	}
};
dfsIterative(graph, "a");

const dfsRecursive = (graph, source) => {
	console.log(source);
	for (let neighbor of graph[source]) {
		dfsRecursive(graph, neighbor);
	}
};
dfsRecursive(graph, "a");


