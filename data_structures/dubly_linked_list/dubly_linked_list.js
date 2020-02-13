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

  unshift(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
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
    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev;
      }
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
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.removeNodeBindings(removedNode);
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
list.remove(2)
