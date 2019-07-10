/**
 * Fibonacci sequence
 */

function fib(n) {
  if (n < 2) return n;
  else return fib(n - 1) + fib(n - 2);
}

function fibDynamic(n) {
  let val = [];
  for (let i = 0; i <= n; i++) {
    val[i] = 0;
  }

  if (n < 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
  }
  return n; // lists all fib numbers
}

const nums = fibDynamic(10);
console.log(nums, "here.....");
