/*
 * Using greedy algorithm
 *
 * starts with the highest denomination, quarters, and tries to make as much change -
 * with them as possible. The total number of quarters is stored in the coins array. -
 * Once the amount left becomes less than a quarter, the algorithm moves to dimes, -
 * making as much change with dimes as possible. The total number of dimes is then -
 * stored in the coins array. The algorithm then moves to nickels and pennies in the same manner.
 *
 */

function coinChange(orgnAmt) {
  let coins = [0, 0, 0, 0];
  let denoms = [0.01 ,0.05, 0.1, 0.25];
  let remainAmt = 0;
  if (orgnAmt % denoms[3] < orgnAmt) { // denoms > originalAmount
    coins[3] = Math.floor(orgnAmt / denoms[3]);
    remainAmt = orgnAmt % denoms[3];
    orgnAmt = remainAmt;
  }

  if (orgnAmt % denoms[2] < orgnAmt) {
    coins[2] = Math.floor(orgnAmt / denoms[2]);
    remainAmt = orgnAmt % denoms[2];
    orgnAmt = remainAmt;
  }

  if (orgnAmt % denoms[1] < orgnAmt) {
    coins[1] = Math.floor(orgnAmt / denoms[1]);
    remainAmt = orgnAmt % denoms[1];
    orgnAmt = remainAmt;
  }

  coins[0] = Math.floor(orgnAmt / 0.01);
  console.log(coins);
  return coins
}

coinChange(.63);
