const Stack = require('../../ds/stack/stack');
/*
 * DFS
 * @method 1
 *  - iterative implememtation
 *  @hint: swap in a stack ds(last in first out) for the queue with was used by bfs
 *       : postpone checking whether a vertex has already been explored until after removing it from the data structure
 *
 *  @pseudocode
 *
 *  input: Graph G = (V, E) in adjacency-list representation, and a vertex s ∊ V 
 *  PostCondition: a vertex is reachable from s iif it is marked as explored
 *
 *  1. mark all vertices as unexplored
 *  2. S := a stack data structure, initialized with s
 *  3. while S is not empty do
 *  4.    remove(pop) the vertex v from the front of S
 *  5.    if v is unexplored then
 *  6.      mark v as explored
 *  7.      for each edge (v, w) in v's adjacency list do
 *  8.        add(push) w to the front of S
 *
 *
 * @method 2
 *  - using recursion
 *  - more elegant
 *
 *  input: Graph G = (V, E) in adjacency-list representation, and a vertex s ∊ V 
 *  PostCondition: a vertex is reachable from s iif it is marked as explored
 * @comment all vertices unexplored before outer call
 * 1. mark s as explored
 * 2. for each edge (s,v) in s's adjacency list do
 * 3.   if v is unexplored then
 * 4.       DFS(G, )
 *
 */
function traditional_dfs(graph, s) {
  const stack = new Stack();
  stack.push(s);
  const explored = {};
  while(stack.dataStore.length) {
    let currVertex = stack.pop();
    if (!explored[currVertex]) {
      explored[currVertex] = 'explored';
      console.log(currVertex ? currVertex : 'backtracking ...');
      for (let i in graph[currVertex]) {
        stack.push(graph[currVertex][i]);
      }
    }
  }
}
const graph = { 
  's': [ 'a', 'b'],
  'a': [ 's', 'c'],
  'c': [ 'b', 'e'],
  'b': [ 's', 'c'],
  'e': [ 'c', 'd'],
  'd': [ 'e', 'c', 'b']
};

traditional_dfs(graph, 's');

function recursion_dfs(graph, s) {
  const traverseMap = {};
  traverseMap[s] = 'explored';

 }

recursion_dfs(graph, 's');
