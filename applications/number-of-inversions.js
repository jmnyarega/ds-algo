/*
 * Calculating number of inversions in an array
 * Inversion -> elements that are out of order
 * @Explanation
 * Given an Array A with distinct elements, the number of pairs(i, j) of array indices with -
 * i < j and A[i] > A[j]
 *
 * BRUTE FORCE -> feeling unimaginative
 *
 */

function inversions(A) {
  let inversions = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) inversions++;
    }
  }
  return inversions;
}

inversions([6, 5, 4, 3, 2, 1]); // 15
