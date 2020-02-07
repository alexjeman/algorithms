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
      return currentNode;
    }
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

  unshift(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index == null || index < 0 || index >= this.length) {
      return null;
    }
    let current;
    current = this.head;
    for (let i = 0; i !== index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

    insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let afterNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.removeNodeBindings(removedNode);
  }

  removeNodeBindings(currentNode) {
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
list.remove(2)
list.insert(2, "ninini")