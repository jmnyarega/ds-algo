/*
 * Works by starting at the begining of the array -
 * and comparing the first element with the remaining elements.
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
    console.log(array);
  }
  return array;
}

const sorted = selectionSort([12,3,0,30,1]);
console.log(sorted); // 0, 1, 3, 12, 30
