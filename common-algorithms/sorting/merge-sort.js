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

  while(array1.length && array2.length) {
    if (array1[0] <= array2[0]) sortedArray.push(array1.shift());
    else sortedArray.push(array2.shift());
  }

  while(array1.length) sortedArray.push(array1.shift());
  while(array2.length) sortedArray.push(array2.shift());

  return sortedArray;
}
console.log(mergeSort([1,2,1,2,30,20,12,3,23,23,90,1,0,4]))
