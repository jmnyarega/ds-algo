function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.isEmpty = isEmpty; // returns a boolean
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift()
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  return this.dataStore.join(',');
}

function isEmpty() {
  if (this.dataStore.length === 0) return true;
  return false;
}
module.exports = Queue;
