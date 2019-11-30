/**
 *
 * Given a sorted array of positive integers. Your task is to rearrange  the array elements - 
 * alternatively i.e first element should be max value, second should be min value, third should - 
 * be second max, fourth should be second min and so on...
 *
 */

function rearrangeArray(sortedArray) {
  const result = []
  const len = sortedArray.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      result.push(sortedArray[sortedArray.length - 1]);
      sortedArray.pop();
    } else {
      result.push(sortedArray[0]);
      sortedArray = sortedArray.slice(1);
    }
  }
  return result;
}

// rearrangeArray([1,2,3,4,5,6,7,8]); // [ 8, 1, 7, 2, 6, 3, 5, 4 ]

function rearrageInPlace(sortedArray) {
  let n     = sortedArray.length;
  let temp1 = sortedArray[0];
  let temp2 = sortedArray[n-1];
  sortedArray[0] = sortedArray[n-1]
  sortedArray[n-1] = temp1
  let i     = 0;
  let j     = n-2;
  while (i < n) {
    if (i > 0 && i % 2 === 1 && temp1 < sortedArray[i]) {
      let temp = sortedArray[i]
      sortedArray[i] = temp1
      temp1 = temp
      console.log(sortedArray)
      if (i === 6) break
    }
    if (i > 0 && i % 2 === 0) {
      if(sortedArray[j] > sortedArray[i]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[j]
        sortedArray[j] = temp
        j--;
      }
    }
    i++;
  }
}

rearrageInPlace([1,2,3,4,5,6,7,8,9,10]);
