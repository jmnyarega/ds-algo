// O(n2) -> Super slow
function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++ ) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

bubbleSort([1,2,3, 0, 1]);
