/*
 * Ineffecient for large datasets
 * Space complexity of O(n2)
 *
 */

function linearSearch(arr, data) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,2,4,5,6], 90)); // -1
