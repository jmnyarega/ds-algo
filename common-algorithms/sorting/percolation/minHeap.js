const Heap = require('../../../ds/heap/heap');

function MinHeap() {
  this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);
// inherits helpers from heap by copying prototype
// similar to class Classname inherits AnotherClass

MinHeap.prototype.bubbleDown = function() {
  let index = 0;
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    let smallerIndex = this.leftChildIndex(index);
    if (this.rightChild(index) < this.items[smallerIndex]) {
      smallerIndex = this.rightChildIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
}

MinHeap.prototype.bubbleUp = function() {
  let index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

MinHeap.prototype.poll = function() {
  let item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
}

MinHeap.prototype.add = function(item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
}

function MaxHeap() {
  this.items = [];
}

console.log(Heap, 'Test')
MaxHeap.prototype = Object.create(Heap.prototype);
// inherits helpers from heap by copying prototype
// similar to class Classname inherits AnotherClass

MaxHeap.prototype.bubbleDown = function() {
  let index = 0;
  while (this.leftChild(index) && (this.leftChild(index) > this.items[index]
    || this.rightChild(index) > this.items[index])) {
    let biggerIndex = this.leftChildIndex(index);
    if (this.rightChild(index) > this.items[biggerIndex]) {
      biggerIndex = this.rightChildIndex(index);
    }
    this.swap(biggerIndex, index);
    index = biggerIndex;
  }
}

MaxHeap.prototype.bubbleUp = function() {
  let index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) < this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

MaxHeap.prototype.poll = function() {
  let item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
}

MaxHeap.prototype.add = function(item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
}

function addToHeaps() {
  let median = 0;
  const max = new MaxHeap();
  const min = new MinHeap();
  for (let x = 1; x <= 10; x++) {
    if (median === 0) { max.add(x); median = x; }
    if (x > median) {
      min.add(x);
      console.log('Item added to heap')
    }
    // re-balance
    if ((max.items.length - min.items.length) > 1) min.add(max.poll());
    if ((min.items.length - max.items.length) > 1) max.add(min.poll());
    if (max.items.length === 0 && min.items.length === 1) median = min.peek();
    else if (max.items.length === min.items.length) {
      median = (max.peek() + min.peek()) / 2;
    }
    else if ((max.items.length - min.items.length) === 1) median = max.peek();
    else if ((min.items.length - min.items.length) === 1) median = min.peek();
    console.log('min heap', min.items, 'max heap', max.items, Math.floor(median))
  }
}

addToHeaps()
