/*
 * Input: An unsorted array A of n integers and target integer t
 *
 * Goal: Determine whether or not the are two numbers, x and y, in A satisfying x + y = t2
 * 
 * Soln
 *  1. Brute Force -> O(n2)
 *  2. For each choice of x, only one choice for y could possibly work(namely, t-x), so why not look for specifically for this y?
 *
 *  Pseudocode:
 *  Input: array A of n integers and a target interger t.
 *  Output: "Yes" if A[i] + A[j] = t fot some i, j E {1,2,3, ..., n}, "no" otherwise
 *
 * LINEAR SEARCH -> O(n2)
 *  for i = 1 to n do
 *    y := t - A[i]
 *    if A contains y then
 *      return "yes"
 *  return "no"
 *
 * Sorting the array first -> O(nlogn)
 *
 * Sort A
 * for i = 1 to n do
 *  y := t - A[i]
 *  if A contains y then                // binary search
 *    return "yes"
 * return "no"
 *
 * Wait we are doing a lot repeated lookups !!!! -> Hash table O(n)
 * H := empty hash table
 * for i = 1 to n do
 *  INSERT A[i] into H
 * for i = 1 to n do
 *  y := t - A[i]
 *  if H contains y then
 *  return "yes"
 * return "no"
 */
