/* @TODO: I promise
 *    - Implement heap data structure...
 *    
 *  Questions:
 *    - Determine the number of levels in BST, ST(Search Tree), HEAP
 *    - Given n as the number of nodes, the approximate number of levels in ST is O(logn) -> n - 1
 *
 */
class Heap {
  constructor() {
    this.size = 0;
    this.heap = [];
  }
  insert() {} // o(logn) -> Worst case scenario => the number of swaps is at most equal to the number of levels => (Olog n) alias bubble-up
  extractMin() {} // the number of swaps is at most equal to the number of levels => (Olog n) alias bubble-down
  delete() {} // O(logn) => same reason has for insert operation
}
