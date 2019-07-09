/*
 * Binary search -> O(n2)
 * caveat -> If there are many occurrances of the searched item, Binarysearch function
 *  will return any of the elements. It's our job to get the other occurances
 *
 */

function binarySearch(arr, data) {
  let lower = arr[0];
  let upper = arr[arr.length - 1];

  while(lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    if (arr[mid] < data) { // move towards upperBound
      lower = mid + 1; // move lowerBound to the midPoint
    } else if (arr[mid] > data) {
      upper = mid - 1; // move upperBound to the midPoint
    } else {
      return mid; // return the current mid
    }
  }
  return -1;
}

binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10], 10); // 8
