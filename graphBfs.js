const graph = {
	a: ["b", "c"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};
const helperFunc = (graph, stack) => {
	let current = stack.shift();
	console.log(current);
	if (graph[current]) {
		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
};
const bfs = (graph, source) => {
	let stack = [source];
	while (stack.length > 0) {
		helperFunc(graph, stack);
	}
};
bfs(graph, "a");
