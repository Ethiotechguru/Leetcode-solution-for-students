function createNode(val) {
    if(typeof val !== 'number'){
        throw new Error("not Valid")
    }
    return {
        val:val,
        next:null
    }
};

function createLinkedList(arr1, arr2) {
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    let LinedListOne = createNode(arr1[0]);
    let l1 = LinedListOne;
    let LinedListTwo = createNode(arr2[0]);
    let l2 = LinedListTwo;
    for(let i = 1; i<arr1.length; i++){
        LinedListOne.next = createNode(arr1[i]);
        LinedListOne = LinedListOne.next;
    }
    for (let i = 1; i < arr2.length; i++) {
		LinedListTwo.next = createNode(arr2[i]);
		LinedListTwo = LinedListTwo.next;
	}
    return addTwoSum(l1, l2);
}
const addTwoSum = (a, b)=>{
    let result =  createNode(-1);
    let dummyRes = result;
    let remainder = 0;
    while(a || b || remainder){
        let aVal = a ? a.val : 0;
        let bVal = b ? b.val : 0;
        let sum = aVal + bVal + remainder;
        remainder = Math.floor(sum/10);
        result.next = createNode(sum%10);
        result = result.next;
        a = a ? a.next : null;
        b = b ? b.next : null;
    }
    return dummyRes.next;
}
//([2,4,3],[5,6,4]) ([0],[0]) ([9,9,9,9,9,9,9], [9,9,9,9])
let LinkedList = createLinkedList([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);//[2,4]

function ListToArr(list) {
    let arr = [];
    let node = list;
    console.log(node)
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    console.log(arr)
}
ListToArr(LinkedList);