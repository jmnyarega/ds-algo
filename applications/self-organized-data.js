/**
 * A simulation for self-organization of data
 */

function selfOrganize(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      // move the element a step forward
      if (i > 0) {
        let temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
      return i;
    }
  }
  return -1;
}
selfOrganize([10, 0, 2, 1, 90, 100, 23], 0);

