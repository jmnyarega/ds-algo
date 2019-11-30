function rotations(array) {
  let counter = 0
  for (let i in array) {
    if (array[i] > array[Number(i)+1]) {
      counter += 1
    }
  }
  return counter
}

