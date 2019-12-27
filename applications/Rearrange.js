/*
 *
 *
 *
 *
 */

function rearrange(arr) {
  let i = 0;
  let j = 1;
  while(arr.length > i) {
    if (arr[i] > 0 && arr[j] < 0) {
      console.log('Correct')
    } else {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j--;
      console.log(arr)
    }
    i++;
    j++;
  }
}

rearrange([12, 11,-13,-5,6,-7,5,-3,-6])
