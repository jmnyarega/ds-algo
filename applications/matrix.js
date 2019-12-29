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
    // matrix product
    if (this.cols !== n.rows) {
      return;
    } else {
      let a = this;
      let b = n;
      let result = new Matrix(a.rows, b.cols);
      for (let i = 0; i < result.rows; i++) {
        for (let j = 0; j < result.cols; j++) {
          let sum = 0;
          for (let k = 0; k < a.cols; k++) {
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

const m1 = new Matrix(3,3);
const m2 = new Matrix(3,3);
m2.randomize();
m1.randomize();
console.log(m2.multiply(m1));
