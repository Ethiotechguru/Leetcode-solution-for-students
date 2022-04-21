/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//[[1,4,5],[1,3,4],[2,6]]
class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let arr =[
    {val:1,next:{val:4,next:{val:5,next:null}}},
    {val:1,next:{val:3,next:{val:4,next:null}}},
    {val:2,next:{val:6,next:null}}
]
var mergeKLists = function (lists) {
	let nodeList = new ListNode();
	let dummyList = nodeList;
	let arr = lists;
	let toBeMerged = [];
	while (arr.length > 0) {
		let nodeArr = [];
		let node = arr[0];
		while (node) {
			nodeArr.push(node.val);
			node = node.next;
		}
		toBeMerged.push(...nodeArr);
        nodeArr = null;
		arr.splice(0, 1);
	}
	toBeMerged.sort((a, b) => a - b);
	let j = 0;
	while (j < toBeMerged.length) {
		nodeList.next = new ListNode(toBeMerged[j]);
		nodeList = nodeList.next;
		j++;
	}
    toBeMerged = null;
	return dummyList.next;
};
mergeKLists(arr);;
