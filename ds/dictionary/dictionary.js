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
    this.dict = {};
    this.length = 0;
  }

  isEmpty() {
    return !Object.keys(this.dict).length;
  }

  display() {
    console.log(this.dict);
  }

  /*
   * Sorting shouldn't be an issue in dictionaries...
   * You don't need to sort items in a dictionary ...
   */
  sort() {
    const sortedDictKeys = Object.keys(this.dict).sort();
    const sortedDict = {};
    for (let x of sortedDictKeys) {
      sortedDict[x] = x;
    }
    this.dict = sortedDict;
  }

}
module.exports = Dictionary;
