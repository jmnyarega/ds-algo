/*
 * Key: computing median of medians
 *
 * @TODO
 *  - Input: array A of n >= 1 distinct numbers and an integer i E {1,2,...,n}
 *  - Output: the ith order statistic of A
 *
 *  @FIXME
 *   - if n = 1 then      // base case
 *      return A[1]
 *
 *    for h := 1 to n/5 do // first round of winners
 *      C[h] := middle element from the hth group of 5
 *    p := Dselect(C, n/10)
 *    partition A around p
 *    j := p's position in partitioned array
 *
 *    if j == i then:
 *      return p
 *    else if j > i then
 *      return Dselect(first part of A, i)
 *    else
 *      return Dselect(second part of A, i)
 *
 */
