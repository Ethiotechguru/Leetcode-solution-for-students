class Tree{
    constructor(val){
        this.val=val;
        this.left = null;
        this.right = null;
    }
}
//                       a
//                      / \
//                    b     c
//                   / \   / \
//                  d   e f   g

let a =  new Tree(50);
let b = new Tree(30);
let c = new Tree(65);
let d = new Tree(20);
let e = new Tree(40);
let f = new Tree(55);
let g = new Tree(60);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
function traverse(tree, arr) {
    if(typeof tree !== 'object'){
        return null;
    }
    arr.push(tree.val)
    let left = tree.left ? tree.left:tree.val;
    console.log(left)
    let right = tree.right ? tree.right:tree.val;
    console.log(right)
    traverse(left, arr);
    traverse(right, arr)
    return arr;
}
// let cdd = traverse(a, []);
// console.log(cdd);


function addToTree(tree) {
    let node = new Tree(val);
    if (!tree) {
        tree = node;
        return tree;
	}
    let stack = [tree]

    while(true){
        let temp =stack.pop();
        if(!tree.left){
            tree.left = node;
            return this;
        }else if(!tree.right){
            current.right = node;
            return this;
        }

    }
}
function searchTree(tree, stack, val) {
    stack = [tree]
    
    if(stack.length<=0){
        return null;
    }
    let current = stack.shift();
    if(current && current.val === val){
        return current.val;
    }
    if (current && val<current.val) {
        stack.push(current.left);
    }if (current && val>current.val) {
        stack.push(current.right);
    }
    if(!current){
        return -1
    }
    return searchTree(current, stack, val)
}
//                       a
//                      / \
//                    b     c
//                   / \   / \
//                  d   e f   g

let hq = searchTree(a, [], 30);
console.log(hq)
