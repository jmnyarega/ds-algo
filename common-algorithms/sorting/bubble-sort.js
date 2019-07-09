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

const sorted = bubbleSort([10, 8, 3, 2, 2, 4, 9, 5, 4, 3 ]);
console.log(sorted); // [ 2, 2, 3, 3, 4, 4, 5, 8, 9, 10 ]
