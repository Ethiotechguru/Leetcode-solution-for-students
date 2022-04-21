class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const createNodeList = (arr)=>{
    let nodeList = null;
    let dummyList;
    for(let i = 0; i<arr.length; i++){
        let newNode = {
            val:arr[i],
            next:null,
        }
        if(!nodeList){
            nodeList = newNode;
            dummyList = nodeList;
        }else{
            dummyList.next = newNode;
            dummyList = dummyList.next;
        }
    }
    return nodeList;
}
let arrNode =createNodeList([1, 2, 3, 4, 5]);

var reverseKGroup = function(head, k) {
    let arr = [];
    let node = head;
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    let i = 0;
    while(i<arr.length && (arr[i+k-1] || arr[i+k-1] === 0)){
        if(i%k === 0){
            let start = i;
            let end = i+k-1;
            while(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end]  = temp;
            start++;
            end--;
            }
        }
        i++;
    }
    let dummyNode = head;
    while(dummyNode){
        dummyNode.val = arr.splice(0,1)[0];
        dummyNode = dummyNode.next;
    }
    console.log(arr)
    console.log(head)
    return head
};
reverseKGroup(arrNode,2);
