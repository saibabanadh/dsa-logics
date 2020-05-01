/**
 * A linked list node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Doubly-linked list
 */
class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  get length() {
    return this._length;
  }
  
  help(){
    return {
      "help()" : "give you all actions available",
      "isEmpty()" : "checking if list is empty",
      "add(value, index)" : "adding new elements to the list with or without index",
      "get(index)" : "get only value of given index",
      "getNode(index)" : "get Node of given index",
      "del(index)" : "delete node of given index",
      "delNode(node)" : "delete node",
      "forEach" : "Iterate through the linked list"
    }
  }
  
  isEmpty() {
    return this.length === 0;
  }

  add(n, index) {
    if (index > this.length || index < 0) {
      throw new Error('Index out of bounds');
    }

    const node = new Node(n);

    if (index !== undefined && index < this.length) {
      let prevNode;
      let nextNode;

      if (index === 0) {
        // Insert in the beginning
        nextNode = this.head;
        this.head = node;
      } else {
        nextNode = this.getNode(index);
        prevNode = nextNode.prev;
        prevNode.next = node;
        node.prev = prevNode;
      }
      nextNode.prev = node;
      node.next = nextNode;
    } else {
      // Insert at the end
      if (!this.head) this.head = node;

      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }
      this.tail = node;
    }

    this._length++;
  }

  get(index) {
    return this.getNode(index).value;
  }

  getNode(index) {
    if (index >= this.length || index < 0) {
      throw new Error('Index out of bounds');
    }

    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }

    return node;
  }

  del(index) {
    if (index >= this.length || index < 0) {
      throw new Error('Index out of bounds');
    }

    this.delNode(this.getNode(index));
  }

  delNode(node) {
    if (node === this.tail) {
      // node is the last element
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      // node is the first element
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    this._length--;
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node.value);
      node = node.next;
    }
  }
}

module.exports = LinkedList;
