class Stack {
  constructor() {
    //Array is used to implements stack
    this.items = [];
  }

  pushElement(data) {
    // push element into the items
    this.items.push(data);
  }

  popElement() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length === 0) return "UnderFlow";
    return this.items.pop();
  }

  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }

  // printStack function
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

var stack = new Stack();
stack.pushElement(10);
stack.pushElement(23);
stack.pushElement(12);
stack.pushElement(35);
stack.pushElement(65);
stack.pushElement(86);

console.log("push", stack.printStack());

console.log(stack.popElement());
console.log("after pop", stack.printStack());

console.log(stack.peek());
console.log("after peek", stack.printStack());
