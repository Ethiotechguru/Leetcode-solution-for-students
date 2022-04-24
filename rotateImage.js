var rotate = function (matrix) {
	let map = {};
	let i = 0;
	let counter = 0;
	let len = matrix.length;
	while (true) {
		let j = matrix[i].length - 1;
		while (true) {
			if (!map[i]) {
				map[i] = [matrix[j][i]];
			} else {
				map[i].push(matrix[j][i]);
			}
			j--;
			counter++;
			if (j < 0) {
				break;
			}
		}
		i++;
		if (counter >= len * matrix[len - 1].length) {
			break;
		}
	}
	for (let key in map) {
		let idx = +key;
		matrix[idx] = map[key];
	}
	return matrix;
};
rotate([[1,2,3],[4,5,6],[7,8,9]])