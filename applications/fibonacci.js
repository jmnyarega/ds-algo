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
  return val[n - 1]; // lists all fib numbers
}

function iterFib(n) {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = nextLast + last;
    nextLast = last;
    last = result;
  }
  return result;
}

fibDynamic(10); // 55
fib(10); // 55
iterFib(10); // 55
