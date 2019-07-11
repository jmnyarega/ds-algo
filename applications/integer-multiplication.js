/**
 *
 * A recursive algorithm for integer multiplication presumably involves multiplication -
 * of numbers with fewer digits like 12, 34, 56 and 78 in the computation aboveo
 *
 * x = 10^(n/2) * a+b
 * y = 10^(n/2) * c+d
 *
 * x.y = (10^(n/2) * a+b) * (10(n/2) * c+d)
 *     = 10^n * (a*c) + 10^(n/2)* (a*b + b) + b*d  // after expanding
 *
 */
function multiply(x, y) {
  const x_string = x.toString();
  const y_string = y.toString();
  if (x_string.length === 1) {
    return x * y;
  } else {
    const a = x_string.slice(0, Math.floor(x_string.length/2));
    const b = x_string.slice(Math.floor(x_string.length/2), x_string.length)
    const c = y_string.slice(0, Math.floor(y_string.length/2));
    const d = y_string.slice(Math.floor(y_string.length/2), y_string.length);
    // recursively compute -> 
    // ac := a, ad := ad, bc := bc and bd := bd -> This makes it four recursive calls
    // compute using 10^n * ac + 10^(n/2) * (ad+bc) +bd
  }
}
console.log(multiply(34, 56));
