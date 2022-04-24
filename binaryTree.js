class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const func = (newNode) => {
	let result = [];
    let stack = [newNode];
    
    while(stack.length>0){
        let current = stack.pop();
        result.push(current.val)
        if(current.right){
            stack.push(current.right)
        }if(current.left){
            stack.push(current.left);
        }
    }
    console.log(result)
    return result;
};

const makeList = (arr)=>{;
    for (let i = 1; i <= arr.length; i++) {
		func(new Node(arr[i]));
	}
}
// makeList(['a','b','c', 'd','e','f','g']);

const  tree = (node)=>{
    if(!node){
        return -1;
    }
    let stack = [node];
    while(stack.length>0){
        let current = stack.pop();
        console.log(current.val)
        if(current.left){
            stack.push(current.left);
        }if(current.right){
            stack.push(current.right);
        }
    }
}


const depthFirstRecursive = (root)=>{
    if(!root) return [];
    const leftValue = depthFirstRecursive(root.left);
    const rightValue = depthFirstRecursive(root.right);

    return [root.val,...leftValue, ...rightValue]
}

let a = new Node('a');
let b = new Node('b')
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node('g');

a.left = b;
a.right = c;
b.left =d;
b.right=e;
c.left =f;
c.right = g;

// console.log(pp)

const breathFirstRecursive=(node)=>{
    let queue = [node];
    let result = [];
    while(queue.length>0){
        let current = queue.shift();
        result.push(current.val);
        if(current.left){
            queue.push(current.left);
        }if(current.right){
            queue.push(current.right);
        }
    }
    return result;
}
// console.log(depthFirstRecursive(a));
// console.log(breathFirstRecursive(a));

//                       a
//                      / \
//                    b     c
//                   / \   / \
//                  d   e f   g

const searchVal = (node, target)=>{
    let stack = [node];
    let count = 0;
    let res = [];
    while(stack.length>0){
        
        let current = stack.pop();
        res.push(current.val)
        if(current.val === target){
            console.log(count);
            console.log(res)
            // return true;
        }
        if (current.left) {
			stack.push(current.left);
		}if(current.right){
            stack.push(current.right);
        }
        count++;
    }
    console.log(res);
    console.log(false)
    return false;
}
const depthFirstSearch=(node,target)=>{
    if(!node) return -1;
    if(node.val ===  target){
        return true;
    }
    depthFirstSearch(node.left,target);
    depthFirstSearch(node.right,target);
}
depthFirstSearch(a, "c");