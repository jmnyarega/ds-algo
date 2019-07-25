/*
 * formulae a^2 + b^2 = c^2
 */

// naive -> O(n^3)
function triplet(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      for (let z = y + 1; z < arr.length; z++) {
        let a = arr[x];
        let b = arr[y];
        let c = arr[z];
        if ((a+b === c) || (a+c === b) || b+c === a) {
          return true
        }
      }
    }
  }
  return false;
}
triplet([1, 2, 3]); // true
triplet([0, 1, 2]); // false
