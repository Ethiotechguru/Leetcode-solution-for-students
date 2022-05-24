class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let a = new Node(5),b= new Node(3),c= new Node(6),d = new Node(7),e = new Node(2);
a.next = b;b.next = c;c.next = d;d.next =e;

const helperFunc = (head, sum) => {
	if (head === null) return sum;
	return helperFunc(head.next, sum + head.val);
};
const sumList = (head) => {
	return helperFunc(head, 0);
};
