/*
 * Straight forward method of calculating Matrix multiplication
 */

function multiplyMatrix(A, B) {
  const A_columns = A[0].length;
  const B_rows = B.length;
  if (A_columns !== B_rows) { console.log(`Can't multiply A & B`); return; }
  const result = Array(B_rows);
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(A_columns);
  }
  for (let i = 0; i < B_rows; i++) {
    for (let j = 0; j < A_columns; j++) {
      let sum = 0;
      for (let k = 0; k < B[0].length; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

const A = [
  [1, 2],
  [3, 4]
];

const B = [
  [5, 6],
  [7, 8]
]

const multiplication = multiplyMatrix(A, B);
console.log(multiplication);
