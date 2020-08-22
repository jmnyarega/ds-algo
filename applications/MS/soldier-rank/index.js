/*
 * In the army, each soldier has an assigned rank. A soldierof rank X has to report to (any) soldier of rank X + 1. Many
 * soldiers can report to the same superior. Write a function:
 *
 *  def solution(ranks)
 *
 *
 * that, given an array ranks consisting of soldiers' ranks =, returns the number of soldiers who can report to the same
 * superior.
 *
 *
 *
 * Examples:
 *
 *  Given ranks [3,4,3,0,2,2,3,0,0], of your function should return 5 because:
 *    - Three soldiers of rank3 (ranks[0], ranks[2],, ranks[6]) may report to a soldier of rank 4(ranks[1])
 *    - Two soldiers of rank 2 may report to any solder of rank 3.
 */

function solution(ranks) {
  const sortedRank = ranks.sort((x, y) => y - x);
  const rank = {};
  let howMany = 0;
  for (let i = 0; i < sortedRank.length; i++) {
    let reportTo = sortedRank[i] > 0 && sortedRank[i] - 1;
    rank[reportTo] = true;

    if (rank[sortedRank[i]]) {
      howMany += 1;
    }
  }
  return howMany;
}

const num = solution([4, 4, 3, 3, 1, 0]);
