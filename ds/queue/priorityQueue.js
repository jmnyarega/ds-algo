class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(element, priority) {
    const obj = new QElement(element, priority);
    let doesNotExist = true;

    for (let i in this.items) {
      if (this.items[i].priority > obj.priority) {
        this.items.splice(i, 0, obj);
        doesNotExist = false
      }
    }
   if(doesNotExist) this.items.push(obj);
  }

  dequeue() {
    if (this.isEmpty()) return 'UnderFlow';
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return 'UnderFlow';
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return 'UnderFlow';
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length
  }

  printQueue() {
    console.log(JSON.stringify(this.items, null, 2));
  }
}

module.exports = PriorityQueue
