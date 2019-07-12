/*
 * using divide and conquer
 *
 * The number of recursive calls is n * n
 *
 * @TODO Implement this ->
 *
 */

function matrixMultiplication(x, y) {
  if (x.length === 1) return x[1][1] * y[1][1] // returns 1 * 1 matrix
  else {
    let a = matrixMultiplication(x); // submatrices of x a, b c and d
    let e = matrixMultiplication(y); // submatrices of y e, f, g and h
    return result;
  }
}
