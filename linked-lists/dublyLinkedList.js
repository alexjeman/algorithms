class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let currentTail = this.tail;
    let secondToLastNode = currentTail.prev;
    this.removeNodeBindings(currentTail);
    this.tail = secondToLastNode;
    return currentTail;
  }

  shift() {
    if (this.head === null) {
      return null;
    }
    let currentHead = this.head;
    let secondToHeadNode = currentHead.next;
    this.removeNodeBindings(currentHead);
    this.head = secondToHeadNode;
    return currentHead;
  }

  removeNodeBindings(currentNode) {
    if (currentNode.prev !== null) {
      currentNode.prev.next = currentNode.next;
    }
    if (currentNode.next !== null) {
      currentNode.next.prev = currentNode.prev;
    }
    currentNode.prev = null;
    currentNode.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
}

let list = new LinkedList();

list.push(901);
list.push(902);
list.push(903);
list.push(904);
list.push(905);
