/*
 *
 * Calculating GCD of two positive integers using Euclid's algorithm
 *
 */

function gcd(p, q) {
  if (q === 0) return p;
  let r = p % q;
  return gcd(q, r);
}

gcd(40, 15); // 15
