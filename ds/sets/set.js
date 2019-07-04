/*
 * A set is a location for unique elements, the elements of a set are called **members**
 * The sets are also unordered...
 * 
 * Definitions
 *  - Empty set -> A set containing no members
 *  - Universe  -> The set of all possible members
 *  - Equal-Sets -> contains exactly the same elements
 *  - Subsets  -> A subset of a set all members of Set A are contained in set B 
 *
 * Operations
 *  - Union -> A new set is obtained by combining two sets i.e A+B
 *  - Intersection -> Adding all members of set A so that they also exist in set B
 *  - Difference -> A - B 
 */
class Set {
  constructor() {
    this.datastore = [];
    this.length = 0;
  }
  
  add(element) {
    if (!this.datastore.includes(element)) {
      this.datastore.push(element);
      this.length++;
      return true;
    }
    return false;
  }

  clear() {
    this.datastore = [];
    this.length = 0;
  }

  remove(element) {
    let pos = this.datastore.indexOf(element);
    if (pos > -1) {
      this.datastore.splice(pos, 1);
      this.length--;
      return true;
    }
    return false;
  }

  show() {
    return this.datastore;
  }

  union(set) {
    const emptySet = new Set();
    for (let i = 0; i < set.length; i++) {
      if (!this.datastore.includes(set.datastore[i])) {
        emptySet.add(set.datastore[i]);
      }
    }
    for (let i = 0; i < this.length; i++) {
      if (!emptySet.datastore.includes(this.datastore[i])) {
        emptySet.add(this.datastore[i]);
      }
    }
    return emptySet;
  }

  interset(set) {
    const tempSet = new Set();
    for (let i = 0; i < this.length; i++) {
      if (set.datastore.includes(this.datastore[i])) {
        tempSet.add(this.datastore[i]);
      }
    }
    return tempSet;
  }

  subSet(set) {
  /* checks if `set` <argument> length is less than this's set
   * Otherwise, not a subset. Then check if each member in a subset is available in a 
   * the this's set. If any of the members is not available, return false and stop.
   * Otherwise through.
   */
    if (set.length > this.length) return false;
    else {
      for (let i = 0; i < set.length; i++) {
        if (!this.datastore.includes(set.datastore[i])) {
          return false
        }
      }
      return true;
    }
  }
  
  difference(set) {
    /* Returns a set that contains those members of the first set that are not on the 
     * second set.
     */
    const tempSet = new Set();
    for (let i = 0; i < this.length; i++) {
      if (!set.datastore.includes(this.datastore[i])) {
        tempSet.add(this.datastore[i])
      }
    }
    return tempSet;
  }

}

module.exports = Set;
