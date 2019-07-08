function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
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
  if (previousNode.next.element !== 'head') {
    previousNode.next = previousNode.next.next;
  }
}

function findPrevious(element) {
  let currNode = this.head;
  while (currNode.next.element !== element && currNode.next.element !== 'head') {
    currNode = currNode.next;
  }
  // console.log(currNode);
  return currNode;
}

function display() {
  let currNode = this.head;
  const cities = [];
  while (currNode.next.element !== 'head') {
    cities.push(currNode.next.element);
    currNode = currNode.next;
  }
  return cities.join('\n');
}

const cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('RussellVille', 'Conway');
cities.insert('Alma', 'RussellVille');
cities.remove('Alma');
console.log(cities.display());
