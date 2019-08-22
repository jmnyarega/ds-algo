/*
 * Study and implement merge sort algorithm
 *
 */

function mergeSort(array) {
  if (array.length <= 1) return array;
  else {
    const mid = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, mid);
    const secondHalf = array.slice(mid, array.length);
    return merge(
      mergeSort(firstHalf),
      mergeSort(secondHalf)
    );
  }
}

function merge(array1, array2) {
  let sortedArray = [];
  console.log("Array1 -> ", array1, "array2 -> ",array2);
  while(array1.length && array2.length) {
    if (array1[0] <= array2[0]) sortedArray.push(array1.shift()); // @TODO implement using i and j 
    else sortedArray.push(array2.shift());
  }

  while(array1.length) sortedArray.push(array1.shift());
  while(array2.length) sortedArray.push(array2.shift());
  console.log("Sorted -> ", sortedArray);
  return sortedArray;
}
mergeSort([54,26,93,17,77,31,44,55,20]);
