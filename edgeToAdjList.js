let edge = [
	["i", "j"],
	["i", "k"],
	["k", "m"],
	["j", "m"],
	["m", "n"],
	["o", "n"],
	["p", "q"],
];

function buildAdjacencyList(edges) {
	let map = {};
	for (let edge of edges) {
        const [a,b] = edge;
		if (!map[a]) {
			map[a] = [];
		}
		if (!map[b]) {
			map[b] = [];
		}
		map[a].push(b);
		map[b].push(a);
	}
	return map;
}
//shout out put 
//{i:[j,k],j:[i,m], k:[i,m], m:[k,j,n],n:[m,o],o:[n],p:[q],q:[p]};
let adjacencyList = buildAdjacencyList(edge);

function hasPath(adjList, src, des) {
    if (!adjList[src]){
        return false;
    }
    function checkPath(src, des, visited) {
        if (src === des) {
            return true;
        }
        if (visited.has(src)) {
            return false;
        }
        visited.add(src);
        for (let neighbor of adjList[src]) {
            if (checkPath(neighbor, des, visited) === true) {
                return true;
            }
        }
        return false;
    }
    return checkPath(src, des, new Set())
}
hasPath(adjacencyList, "i", "o");
