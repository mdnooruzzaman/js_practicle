class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head;
function AddNodeStart(value) {
  var linkedListNode = new Node(value);
  if (head === null) {
    head = linkedListNode;
  } else {
    linkedListNode.next = head;
    head = linkedListNode;
  }
}

function addNodeEnd(value) {
  var linkedListNode = new Node(value);
}

AddListNode(5);
AddListNode(15);
AddListNode(51);
AddListNode(53);

const printList = () => {
  var str = "";
  while (head) {
    str += head.data + " ";
    head = head.next;
  }
  console.log(str);
};
printList();
