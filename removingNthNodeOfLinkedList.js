function createNode(val) {
	return {
		val: val,
		next: null,
	};
}
const createLinkedList = (arr) => {
	let node = createNode(arr[0]);
	let dummyNode = node;
	for (let i = 1; i < arr.length; i++) {
		node.next = createNode(arr[i]);
		node = node.next;
	}
	return dummyNode;
};

const removeNthNode = (arr, n)=>{
    let node =  createLinkedList(arr);
    if(n === 0){
        console.log(node.next);
        return node.next;
    }
    let j = 0;
    let len = arr.length;

    let returnVal = createNode();
    let dummyNode = returnVal;

    while(j!==len-n && node){
        returnVal.next = createNode(node.val);
        returnVal = returnVal.next;
        node = node.next;
        j++;
    }
    returnVal.next = node.next;
    console.log(dummyNode.next)
    return dummyNode.next;
}
removeNthNode([1, 2], 0);