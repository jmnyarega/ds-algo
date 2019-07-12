/*
 * Straight forward method of calculating Matrix multiplication
 * 
 */

function matrixMultiplication(x, y) {
  let z = Array(x.length);
  for(let i = 0; i < x.length; i++) {
    z[i] = Array(x.length);
    for (let j = 0; j < x.length; j++) {
      z[i][j] = 0;
      for (let k = 0; k < x.length; k++) {
        z[i][j] = z[i][j] + x[i][k] * y[k][j];
      }
    }
  }
  return z;
}

console.log(matrixMultiplication([ [1, 2], [0, 1] ], [[0, 1], [1, 2] ]));
