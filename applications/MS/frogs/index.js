/*
 * There are N blocks, numbered from 0 to N-1, arranged in a row. A couple of frogs were sitting together on one block
 * when they had a terrible squirrel. Now they want to jump away from one another so that the distance them will be as
 * large as possible. The frogs can only jump up, meaning that they can move from one block to another only if the two
 * blocks are adjacent and the second block is of the same height as the first. What is the longest distance that they
 * can possibly create between each other, if they also chose to sit on the optimal starting block initially?
 */

/*
 * write a function:
 *  function solution(blocks) {}
 *
 *  that, given an array blocks consisting of N integers denoting the heights of the blocks, returns the longest
 *  possible distance that two frogs can make between each other starting from one of the blocks.
 *
 *  Example:
 *  - Given blocks = [ 2,6,8,5 ] should return 3
 *  - Given blocks = [ 1,5,5,2,6] should return 4
 *  - Given blocks = [ 1, 1 ] should return 2
 */

function solution(blocks) {
  let dist = 1;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i + 1] >= blocks[i]) {
      dist += 1;
    }
  }
  return dist;
}

const distance = solution([1, 1]);

function solution1(blocks) {
  let dist = 0;
  for (let i = 0; i < blocks.length; i += 2) {
    console.log(i);
    if (blocks[i - 2] <= blocks[i]) {
      dist += 2;
    }
  }
  return dist;
}

const distance1 = solution1([1, 1]);
console.log(distance1);
