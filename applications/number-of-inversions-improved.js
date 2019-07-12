/*
 * Using mergesort-like technique to count number of inversions
 *
 * PSEUDOCODE
 * __________________
 *
 * Input: array A of n distinct integers.
 * Output: sorted array B with the same integers, and
 * the number of inversions of A.
 *
 * if n = 0 or n=1 then return (A, 0) // base case
 * else
 *  (C,leftInv) := Sort-and-CountInv(first half of A)
 *  (D, rightInv) := Sort-and-CountInv(second half of A)
 *  (B, splitInv) := Merge-and-CountSplitInv(C, D)
 *  return (B,leftInv+rightInv+splitInv)
 *
 * NOTE: I am not sorting the array in my implementation, hence not C,D,B variables
 *
 * max number of inversions in an array of size n
 *  (n(n -1)) / 2 i.e 6(5)/2 = 30 if n = 6
 *
 */

function countInv(A) {
  if (A.length <= 1) return 0;
  else {
    const n = A.length;
    const mid = Math.floor(n / 2);
    const leftInv = countInv(A.slice(0, mid));
    const rightInv = countInv(A.slice(mid, n));
    const splitInv = merge(A.slice(0, mid), A.slice(mid, n));
    return leftInv + rightInv + splitInv;
  }
}

function merge(left, right) {
  let count = 0;
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length) {
    if (left[i] <= right[j]) { // self explanatory .... 
      i += 1;
    } else {
      count += left.length - i;
      j += 1;
    } 
  }
  return count;
}
countInv([6,5,4,3,2,1]); // 15
