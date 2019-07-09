/*
 * Works by starting at the begining of the array -
 * and comparing the first element with the remaining elements.
 *
 * Select the min value from the outer loop[ the current one]
 * compare the min value with the rest of the items in inner loop
 * swap the min value with the smaller value found in the inner loop
 *
 * pseudocode
 *
 * min;
 * temp;
 *
 * for i=0, i < n.length, i ++
 *  min = i ( the current element is the least elememt )
 *  for j = i + 1, j < n.length, j++
 *    if (n[min] > n[j])
 *      min = j // update out min value, until we get the smallest
 *  swap(n[min], n[i]) // swap min and current element
 *
 *  return n;
 *
 */
function selectionSort(array) {
  let min;
  let temp;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for(let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    // swap min with current element
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

const sorted = selectionSort([12,3,0,30,1]);
console.log(sorted); // 0, 1, 3, 12, 30
