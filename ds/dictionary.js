class Dictionary {
  constructor() {
    this.dict = {};
    this.length = 0;
  }
  
  insert(key, value) {
    if (!this.dict[key]) {
      this.dict[key] = value;
      this.length++;
    }
    return this.dict;
  }

  remove(key) {
    if (this.dict[key]) {
      delete this.dict[key];
      this.length--;
    }
  }

  find(key) {
    if (this.dict[key]) {
      return this.dict[key]
    }
    return false;
  }

  clear() {
    this.length = 0;
    for (let x in this.dict) {
      if (Object.hasOwnProperty(x)) {
        delete this.dict[x];
      }
    }
    this.dict = {};
  }

  isEmpty() {
    return !Object.keys(this.dict).length;
  }

  display() {
    console.log(this.dict);
  }

}
