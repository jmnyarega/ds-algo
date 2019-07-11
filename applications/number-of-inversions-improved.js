/*
 * Using mergesort-like technique to count number of inversions
 */

function countInv(A) {
  if (A.length <= 1) return 0;
  else {
    const n = A.length;
    const mid = Math.floor(n / 2);
    const a = countInv(A.slice(0, mid));
    const b = countInv(A.slice(mid, n));
    const mergeResult = merge(A.slice(0, mid), A.slice(mid, n));
    const c = mergeResult[1];
    return a + b + c;
  }
}

function merge(left, right) {
  let result = [];
  let count = 0;
  let i = 0;
  let j = 0;
  let leftLen = left.length; 
  while(i < leftLen && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      count += leftLen - i;
      j += 1;
    } 
  }
  result += left.slice(i, left.length);
  result += right.slice(j, right.length); 
  return [result, count];
}

countInv([6,5,4,3,2,1]); // 15
