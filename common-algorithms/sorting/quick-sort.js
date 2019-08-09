/*
 *
 * Quick algorithm
 *
 */

function partition(A, startIndex, endIndex) {
  let pivot = A[medianIndex(A)];
  let leftIndex = startIndex;
  let rightIndex = endIndex - 1;
  while (leftIndex <= rightIndex) {
    while (leftIndex <= endIndex && A[leftIndex] < pivot) { leftIndex++; }
    while (rightIndex >= startIndex && A[rightIndex] > pivot) { rightIndex--; }

    if (leftIndex < rightIndex) {
      // swap
      const temp = A[rightIndex];
      A[rightIndex] = A[leftIndex];
      A[leftIndex] = temp;
    }
    else {
      // This means left and right have crossed, we know that all the items smaller than - 
      // the pivot are before left and all items larger than the pivot are after right
      // This will be executed 4 times because, the array will be partitioned 4 times
      const temp = A[endIndex];
      A[endIndex] = A[leftIndex];
      A[leftIndex] = temp;
    }
  }
  return leftIndex; // this will be the new pivot...
}

function quickSort(A, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const pivotIndex = partition(A, startIndex, endIndex);
  quickSort(A, startIndex, pivotIndex - 1);
  quickSort(A, pivotIndex + 1, endIndex);
  return A;
}

function medianIndex(array) {
  if (array.length <= 1) {
    return array.length - 1;
  } else {
    return Math.ceil(array.length/2) - 1;
  }
}

const array = [5, 1, 6, 8, 12, 0, 2];
quickSort(array, 0, array.length - 1); // [0, 1, 2, 5, 6, 8 12]
