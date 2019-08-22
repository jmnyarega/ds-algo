const Queue = require('../../ds/queue/queue');
/* @solution ->
 *  - @data structure queue
 *  - @params graph (V, E), vertex s ∊ V hint: use adjencency list for this scenario
 * 
 * A vertex is reachable from s if and only if it marked as 'explored'
 *
 * @steps
 *  1 Mark s as explored and all other vertices unplored
 *  2 Q := a queue data structure, initialized with s
 *  3 while Q is not empty do
 *  4 - remove vertex from the front of the Q, call it v
 *  5 - for each edge (v, w) in v's adjencency list do where v and w are vertices
 *  6  - if w is unexplored then
 *  7     - mark w as explored
 *  8     - add w to the end of the Q
 *
 * - This algorithm runs in linear time. 
 *
 * - At the conclusion of BFS, a vertex v ∊ V is marked as explored iif there is a path from s to v in G
 * - The running time of BTS is O(m + n), where m = |E| and n = |V|
 * - The running time of lines 2 - 8 is O(mˢ+ nˢ), where  nˢ and mˢ denote the number of vertices and edges, respectively, reachable froms s in G
 */


function bfs(graph, startingVertex) {
  // mark startingVertex as explored and other vertices unexplored
  const traverseMap = {}
  const route = []
  // <code coming soon />
  traverseMap[startingVertex] = 'explored';
  //create a queue ds & initialize with s
  const queue = new Queue() 
  queue.enqueue(startingVertex)
  while(queue.dataStore.length) { // usually this is O(1) -> One element at a time
    const v = queue.dequeue()
    route.push(v)
    // find the vertex {currentVertex} i.e
    const currentEdges = graph.find(list => list[0] === v)
    for(let x of currentEdges.slice(1)) {
      if (!traverseMap[x]) {
        traverseMap[x] = 'explored';
        queue.enqueue(x);
      }
    }
  }
  return route
}

const graph = [
  ['s', 'a', 'b'],
  ['a', 's', 'c'],
  ['c', 'b', 'e'],
  ['b', 's', 'c'],
  ['e', 'c', 'd'],
  ['d', 'e', 'c', 'b']
];

bfs(graph, 's'); // ['s', 'a', 'b', 'c', 'e', 'd']

/* @input -> graph G = (V, E) in adjancency-list
 *        -> representaion s ∊ V
 *
 * @post-condition: for every vertex  v ∊ V, the value l(v) equals the trues shortest-path dist(s, v)
 *
 * @pseudocode
 * 1 mark s as explored, all other vertices as unexplored
 * 2 l(s) := 0, l(v) := + for every v ≠s
 * 3 Q := a queue data structure is initialized with s
 * 4 while Q is not empty do
 * 5  remove the vertex from the front of Q, call it v
 * 6  for each edge (v,w) in v's adjancency list do
 * 7    if w is unexplored then
 * 8      mark w as explored
 * 9      l(w) := l(v) + 1
 * 10     add w to the end of the Q
 */
function shortestPath(graph, s) {
  console.log(graph, s);
}

// shortestPath({}, 0);
