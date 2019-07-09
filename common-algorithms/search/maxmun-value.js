/*
 * Max value in an array
 */

function maxValue(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}

maxValue([5, 0, 8, 1]);
