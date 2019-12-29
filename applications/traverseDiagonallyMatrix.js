function printDiagonals(array) {
  let column = 0;
  for (let x = 0; x < array.length; x++) {
    console.log(array[x][column]);
    column++;
  }
}

const matrix = [
  [ 1,2,3 ],
  [ 4,5,6 ],
  [ 7,8,9 ],
];

  rotateMatrix(matrix, [0, 0]);
