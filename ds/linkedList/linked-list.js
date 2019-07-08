function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
  this.reverse = reverse;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    // this will throw an error if no element matching the item is found
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  const newNode = new Node(newElement);
  const currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function remove(element) {
  const previousNode = this.findPrevious(element);
  if (previousNode.next) {
    previousNode.next = previousNode.next.next;
  }
}

function findPrevious(element) {
  let currNode = this.head;
  while (currNode.next.element !== element && currNode.next) {
    currNode = currNode.next;
  }
  return currNode;
}

function display() {
  let currNode = this.head;
  const cities = [];
  while (currNode) {
    cities.push(currNode.element);
    currNode = currNode.next;
  }
  return cities.join('\n');
}

function reverse() {
  let current = this.head.next;
  let previousNode = this.head;
  this.head.next = null;
  let reversedLinkedList = null;
  while(current) {
    let nextNode = current.next;
    current.next = previousNode;
    previousNode = current;
    reversedLinkedList = current;
    current = nextNode;
  }
  this.head = reversedLinkedList;
}

const cities = new LinkedList();
cities.insert('A', 'head');
cities.insert('B', 'A');
cities.insert('C', 'B');
cities.reverse();
console.log(cities.display());
