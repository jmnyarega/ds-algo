/*
 * Searching for a min value
 *
 */

function minValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

minValue([8, 1, 0, 5]); // 0
