function createNode(val) {
	return {
		val: val,
		next: null,
	};
}

const createLinkedList = (arr)=>{
    let node = createNode(arr[0]);
    let dummyNode = node;
    for(let i = 1; i<arr.length; i++){
        node.next = createNode(arr[i]);
        node = node.next;
    }
    return dummyNode;
}

// createLinkedList([1, 3, 4, 7, 1, 2, 6]);

const removeFromMiddle = (arr)=>{
    let ListNode = createLinkedList(arr);
    let midIndex = Math.floor(arr.length/2);
    let node = createNode();
    let dummyNode = node;
    let j = 0; 
    while (j !== midIndex && ListNode) {
        node.next = createNode(ListNode.val);
        node = node.next;
        ListNode = ListNode.next;
        j++;
    }
    node.next = ListNode.next;
    console.log(dummyNode.next);
    return dummyNode.next;
}
//(input:[1,2,3,4],outPut:[1,2,4]),(input:[1, 3, 4, 7, 1, 2, 6],outPut:[1,3,4,1,2,6])
removeFromMiddle([1, 2, 3, 4]);
