class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  
  pop() {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let secondToLastNode = currentNode;
      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      this.removeNodeBindings(secondToLastNode);
      this.tail = secondToLastNode;
      this.length -= 1;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }

  removeNodeBindings(currentNode) {
    currentNode.next = null;
    return currentNode;
  }
}

let list = new LinkedList();
