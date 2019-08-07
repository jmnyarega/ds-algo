/*
 *
 * @TODO study and implement quick sort...
 *
 */

function partition(A, startIndex, endIndex) {
  const pivot = A[endIndex];
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
      const temp = A[endIndex];
      A[endIndex] = A[leftIndex];
      A[leftIndex] = temp;
    }
  }
  return leftIndex;
}

function quickSort(A, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const pivotIndex = partition(A, startIndex, endIndex);
  quickSort(A, startIndex, pivotIndex - 1);
  quickSort(A, pivotIndex + 1, endIndex);
  return A;
}

quickSort([5, 1, 6, 8, 12, 0, 4], 0, [5, 1, 6, 8, 12, 0, 4].length - 1);
