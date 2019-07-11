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
 */

function countInv(A) {
  if (A.length <= 1) return 0;
  else {
    const n = A.length;
    const mid = Math.floor(n / 2);
    const a = countInv(A.slice(0, mid));
    const b = countInv(A.slice(mid, n));
    const c = merge(A.slice(0, mid), A.slice(mid, n));
    return a + b + c;
  }
}

function merge(left, right) {
  let count = 0;
  let i = 0;
  let j = 0;
  let leftLen = left.length; 
  while(i < leftLen && j < right.length) {
    if (left[i] <= right[j]) {
      i += 1;
    } else {
      count += leftLen - i;
      j += 1;
    } 
  }
  return count;
}

countInv([6,5,4,3,2,1]);
