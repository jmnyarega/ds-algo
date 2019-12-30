function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];

  for (var i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
  }
}

Matrix.prototype.multiply = function(n) {
  if (n instanceof Matrix) {
    if (this.cols !== n.rows) {
      return;
    } else {
      let a = this;
      let b = n;
      let result = new Matrix(a.rows, b.cols);
      for (let i = 0; i < result.rows; i++) {
        for (let j = 0; j < result.cols; j++) {
          let sum = 0;
            for (let k = 0; k < b.cols; k++) {
            sum += a.matrix[i][k] * b.matrix[k][j];
          }
          result.matrix[i][j] = sum;
        }
      }
      return result;
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
       this.matrix[i][j] *= n;
      }
    }
  }
}

Matrix.prototype.dotMultplication = function(n) {
  let result = new Matrix(this.rows, n.cols);
  result = result.matrix;
  return result.map((row, i) => {
    return row.map((val, j) => {
      return this.matrix[i].reduce((sum, elm, k) => sum + (elm*n.matrix[k][j]) ,0)
    })
  })
}

Matrix.prototype.add = function(n) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      n instanceof Matrix ? this.matrix[i][j] += n.matrix[i][j] : this.matrix[i][j] += n;
    }
  }
}

Matrix.prototype.subtract = function(n) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      n instanceof Matrix ?  this.matrix[i][j] -= n.matrix[i][j] : this.matrix[i][j] += n;
    }
  }
}

Matrix.prototype.randomize = function() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.matrix[i][j] += Math.floor(Math.random() * 10);
    }
  }
}

const m1 = new Matrix(2,2);
const m2 = new Matrix(2,2);
m2.matrix = [ [2, 3], [4, 5] ];
m1.matrix = [ [9, 1], [7, 8] ];
const multiplication = m1.multiply(m2);
