/*
 * We are given a string S of length N consisting only of letters 'AA and/or 'B'. Our goal is to obtain a string in the
 * format "A...AB...B(All letters 'A' occur before all leters 'B') by deleting some letters from S.
 *
 *
 * Write a function
 *      def solution(S):
 *
 *
 * that, given a string S, returns the minimum number of letters that need to be deleted from S in order to obtain a
 * string in the above format
 *
 * Examples: BAAABAB => 2 (remove 2 Bs)
 *           BBABAA  => 3 (remove all As)
 *           AABBBB  => 0
 *
 */

function solution(S) {
  const A = [];
  const B = [];
  S.split("").forEach((x, i) => {
    if (x === "A" && S.slice(i).indexOf(x) > -1) {
      A.push(i);
    } else if (x === "B" && S.slice(i).indexOf(x) > -1) {
      B.push(i);
    }
  });

  const maxA = Math.max(...A);
  return B.filter((x) => x < maxA).length;
}

solution("BAAABAB"); //2
