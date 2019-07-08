/**
 *
 * We gain effeciency when we want to remove elements, not need to search for prev.
 *
 */

function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = new Node('head');
  this.insert = insert;
  this.find = find;
  this.remove = remove;
  this.findLast = findLast;
  this.reverse = reverse;
  this.display = display;
}

function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.prev = currNode;
  currNode.next = newNode;
}

function find(item) {
  let currNode = this.head;
  while (currNode.next && currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  const currNode = this.find(item);
  currNode.prev.next = currNode.next; // jumps current element, (next)
  currNode.next.prev = currNode.prev;
  currNode.next = null;
  currNode.prev = null;
}

function findLast() {
  let currNode = this.head;
  while (currNode.next) {
    currNode = currNode.next;
  }
  return currNode;
}

function reverse() {
  let currNode = this.head;
  currNode = this.findLast();
  while (currNode.prev) {
    console.log(currNode.element);
    currNode = currNode.prev;
  }
  return currNode;
}

function display() {
  let currNode = this.head;
  while (currNode.next) {
    console.log(currNode.next.element); // avoid display head by using (next)
    currNode = currNode.next;
  }
}

const cities = new DoublyLinkedList();
cities.insert('Josiah', 'head');
cities.insert('Nairobi', 'Josiah');
cities.insert('Kisumu', 'Nairobi');
cities.insert('Mombasa', 'Kisumu');
cities.display();

cities.remove('Kisumu');

console.log('------------ After removing Kisumu');

cities.display();

console.log('------------- After reversing');

cities.reverse();
