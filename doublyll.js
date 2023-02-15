var head;
class Node {
  constructor(data) {
    this.element = data;
    this.next = null;
    this.prev = null;
  }
}

//adding node at front of doubly linked list
function push(new_data) {
  let node = new Node(new_data);
  node.next = head;
  node.prev = null;

  if (head !== null) {
    head.prev = node;
  }

  head = node;
  console.log(head);
}

//insert node at given postion
function insertAt(pos, new_data) {
  let node = new Node(new_data);
  let current_node = head;
  let it = 0;

  //iterate till pos
  while (it < pos) {
    it++;
    current_node = current_node.next;
  }
  node.next = current_node.next;
  current_node.next = node;
  node.prev = current_node;

  if (node.next !== null) {
    node.next.prev = node;
  }
}

//insert node after given node
function insertAfter(previous_node, new_data) {
  let node = new Node(new_data);

  node.next = previous_node.next;
  previous_node.next = node;
  node.prev = previous_node;
  if (node.next !== null) {
    node.next.prev = node;
  }
}

//delete node

function deleteNode(del_node) {
  if (head === null || del_node === null) {
    return;
  }

  if (head === del_node) {
    head = del_node.next;
  }
  if (del_node.next !== null) {
    del_node.next.prev = del_node.prev;
  }

  if (del_node.prev !== null) {
    del_node.prev.next = del_node.next;
  }
}

//reverse the doubly linked list
function reverseDLL() {
  let current_node = head;

  while (current_node !== null) {
    temp = current_node.prev;
    current_node.prev = current_node.next;
    current_node.next = temp;
    current_node = current_node.prev;
  }
  if (temp !== null) {
    head = temp.prev;
  }
  return head;
}

push(2);
push(3);
push(5);
