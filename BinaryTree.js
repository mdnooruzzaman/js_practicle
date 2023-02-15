class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
var root = null;

function Inorder(node) {
  if (node == null) {
    return;
  }
  Inorder(node.left);
  console.log(node.data + " ");
  Inorder(node.right);
}

function PreOrder(node) {
  if (node === null) {
    return;
  }
  console.log(node.data + "");
  PreOrder(node.left);
  PreOrder(node.right);
}

function PostOrder(node) {
  if (node == null) {
    return;
  }
  PostOrder(node.left);
  PostOrder(node.right);
  console.log(node.data + "");
}

//sum all the elements
function addNodes(node) {
  if (node == null) {
    return;
  }
  let allNode = node.data + addNodes(node.left) + addNodes(node.right);
  return allNode;
}

var root = new Node(25);
root.left = new Node(15);
root.right = new Node(50);
root.left.left = new Node(10);
root.left.right = new Node(22);
root.left.left.left = new Node(4);
root.left.left.right = new Node(12);
root.left.right.left = new Node(18);
root.left.right.right = new Node(24);
root.right.left = new Node(35);
root.right.right = new Node(70);
root.right.left.left = new Node(31);
root.right.left.right = new Node(44);
root.right.right.right = new Node(90);
root.right.right.left = new Node(66);

console.log("Inorder traversel");
Inorder(root);

console.log("PreOrder");
PreOrder(root);

console.log("PostOrder");
PostOrder(root);

let sum = addNodes(root);
console.log("Sum of all nodes" + sum);
