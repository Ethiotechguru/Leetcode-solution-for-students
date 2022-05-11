var calPoints = function (ops) {
	let record = [];
	for (let i = 0; i < ops.length; i++) {
		if (!isNaN(+ops[i])) {
			record.push(+ops[i]);
		} else if (ops[i] === "C") {
			if (record.length > 0) {
				record.splice(-1, 1);
			}
		} else if (ops[i] === "D") {
			if (record.length > 0) {
				record.push(2 * record[record.length - 1]);
			} else {
				record.push(2);
			}
		} else {
			if (record.length > 0) {
				record.push(record[record.length - 1] + 5);
			} else {
				record.push(5);
			}
		}
		console.log(record);
	}

	return record.reduce((a, b) => a + b, 0);
};

calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]);
