/*24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes 
and return its head. You must solve the problem without 
modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.) */

//? Input: head = [1, 2, 3, 4];
//? Output: [2, 1, 4, 3];

const swapPairs = (head)=> {
	let i = 0;
	let list = head;
	while (list) {
		if (i % 2 === 0) {
			let temp = list.val;
			if (list.next) {
				list.val = list.next.val;
				list.next.val = temp;
			}
		}
		i++;
		list = list.next;
	}
	return head;
};
swapPairs([1, 2, 3, 4]);
