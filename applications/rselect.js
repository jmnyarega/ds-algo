/*
 * Problem : Selection
 * Input: An array of n numbers, in arbitrary order, and an integer i E { 1,2,..., n }
 *
 * Output: The ith-smallest element of A
 *
 * @Example: 
 *  Given  [6,8,9, 2], to find value of i = 2
 *  return 6
 *
 *  @Solution >>
 *   1. Input: array A of n distinct numbers, and an integer i E { 1,2, ... }
 *      Output: the ith order statistic of A
 *
 *      Pseudocode:
 *        B := mergeSort(A):
 *        return A[i]
 *
 *  2. RSelect
 *    
 *    Input: array A of n >= 1 distinct numbers, and an integer i E {1,2, ...}
 *    Outpu: the ith order statistic of A
 *
 *    if n === 1 the:
 *      return A[1]
 *
 *    choose pivot element p uniformly at random from A partition A around p
 *    j:=p's position in partitioned array
 *    if j === i then // you got lucky
 *      return p
 *    else if j > i then:
 *      return Rselect(first part of A i)
 *    else
 *      return Rselect(second part of A, i - j)
 *    NOTE: to get the best out of Rselect, use median as the Pivot
 */
