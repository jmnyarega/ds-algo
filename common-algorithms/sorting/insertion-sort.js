function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let value = array[i]; // current value
    for (var j = i - 1; (j > -1 && array[j] > value); j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one 
      array[j + 1] = array[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    array[j + 1] = value; // use var in the second to make j hoisted...
  }
}
