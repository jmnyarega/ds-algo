/*
 * five conditions to check when working with data structures
 *  - empty
 *  - Beginning
 *  - End
 *  - Middle
 *  - One element
 *
 *  The advantage of double linked list, it gives a constant time when deleting
 *  the tail - ONLY advantage
 * */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = this.tail = node;
      this.size++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size += 1;
    }
  }

  isSorted() {
    if (this.head === null || this.head === this.tail) return;
    let currentNode = this.head;
    let next = this.head.next;

    while(currentNode.next) {
      if (currentNode.data > next.data) { return false; }
      currentNode = next;
      next = currentNode.next;
    }
    return true;
  }

  removeSortedDups() {
    if (this.head === null || this.head === this.tail) return;
    let currentNode = this.head;
    let nextNode = this.head.next;

    while(currentNode.next) {
      if (currentNode.data === nextNode.data) {
        currentNode.next = nextNode.next;
        nextNode = nextNode.next;
        continue;
      }
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
  }

  removeTailNode() {
    let currentNode = this.head;
    let previousNode = null;

    // if the list empty
    if (this.head === null) {
      return null;
    }
    // if only one element is in the list
    if (this.head === this.tail) {
      this.tail = this.head = null;
      return;
    }

    while(currentNode.next) { // we gonna stop at the last node
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.tail = previousNode;
    this.size--;
  }

  removeHead() {
    if (this.head) {
      if (this.head.next === null) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
       }
      this.size--;
    }
  }

  insertAt(data, i) {

    // if adding to head
    if (i === 0) {
      this.addToHead(data);
      return true;
    }

    // if adding to tail
    if (i === this.size) {
      this.addToTail(data);
      return true
    }

    let previousNode = null;
    let currentNode = this.head;
    let node = new Node(data);
    let size = 0;

    while (currentNode) {
      if (size === i) {
        previousNode.next = node;
        node.next = currentNode;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      size++;
    }
    return false;
  }

  removeDups() {
    let previousNode = null;
    let currentNode = this.head;
    let hash = { };

    while(currentNode) {
      // check if the node already exists
      if (hash[currentNode.data]) {
        // not a tail
        if (currentNode.next !== null) {
          previousNode.next = currentNode.next.next;
        } else {
          // if tail, update tail
          this.tail = previousNode;
          previousNode.next = null;
        }
        // reduce size
        this.size--;
      } else {
        hash[currentNode.data] = currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /*
   * check for circular linked list
   *  headConnectedToTail => checks if the head is connected to the tail to
   *  complete the cycle
   *  headConnectedToLast => In case we don't have a tail pointer, we have to
   *  loop through each element, & check whether current.next points to the head
   *
   *  circularInBetween => The complexity of this is O(n2), for each node we
   *  have to loop through the list to check of the current node is making a
   *  cycle
   *
   */
  headConnectedToTail() {
    if (this.tail.next !==null) return true;
    return false;
  }

  headConnectedToLast() {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.next === this.head) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  circularInBetween() {
    let pointer1 = this.head;
    let pointer2 = this.head.next;

    while(pointer1) {
      while(pointer2) {
        if (pointer2.next == null) return false;
        if (pointer1 == pointer2.next) return true;
        pointer2 = pointer2.next;
      }
      pointer2 = this.head;
      pointer1 = pointer1.next;
    }
    return false;
  }

  addCircular(i) {
    let current = this.head;
    let circular = this.head;
    let size = 0;

    if (this.head == null
      || this.head == this.tail
      || i > this.size
    ) {
      return null
    }

    while(circular.next) {
      size++;
      if (size == i) break;
      circular = circular.next;
    }

    while(current.next) {
      current = current.next;
    }
    current.next = circular;
    this.head = current;
  }

  /*
   * End of circular methods
   */

  addToHead(data) {
    const node = new Node(data);
    if (!this.head) this.head = this.tail = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeNode(data) {
    let currentNode = this.head;
    let previousNode = null;

    // if the list is empty
    if (this.head == null) {
      return;
    }

    // if the data is at the beginning of the list
    if (this.head.data === data) {
      this.removeHead();
      this.size--;
      return;
    }

    // if the data is at the end of the list
    if (this.tail.data === data) {
      this.removeTailNode();
      this.size--;
    }

    while(currentNode) { // we go past the last node i.e we are checking every element
      if (currentNode.data === data) {
        previousNode.next = currentNode.next
        this.size--;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  findItem(data) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.data === data) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  reverse() {
    if (this.head == this.tail) return;

    let prev = null;
    let current = this.head;
    let next = this.head.next;

    while(current) {
      next = current.next; // save next
      current.next = prev; // reverse

      // advance pointers
      prev = current;
      current = next;
    }
    // switch head & tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return prev;
  }

  peekFirst() {
    // if the list is empty, return null
    if (this.head === null) return null;
    return this.head.data;
  }

  peekLast() {
    // if the list is empty, return null
    if (this.tail === null) return null;
    return this.tail.data;
  }

}

const llist = new LinkedLists();
llist.insertAt(45, 0);
llist.addToHead(2);
llist.addToHead(1);
llist.addToHead(1);
llist.isSorted();
llist.reverse();
llist.removeSortedDups()
console.log(JSON.stringify(llist));
llist.addCircular(0);
llist.headConnectedToTail()
llist.circularInBetween()
