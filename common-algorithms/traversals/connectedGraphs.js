/** Connected graphs 
 * UCC algorithm
 * Input: undirected graph G = (V, E) in adjancency list rep, with V = { 1,2,3 ..., n }
 * PostCondition: for every u,v ∊  V, cc(u) = cc(v) iif u,v are in the same connected component
 *
 * 1. Mark all vertices as unexplored
 * 2. numCC := 0
 * 3. for i := 1 to n do    @explanation try all vertices 
 * 4.   - if i is unexplored then  @explanation avoind redundacy
 * 5.     - numCC := numCC + 1     @explanation new component
 * 6.     - @comment call bfs() starting at i lines 2 - 8
 * 7.     Q := a queue is not empty data structure, initialized with i
 * 8.     while Q is not empty do
 * 9.       remove the vertex from the front of Q, call it v 
 * 10.      cc(v) := numCC
 * 11.      for each (v,w) in v's adjancency list do
  12.        if w is unexplored then
 * 13.            mark w as explored
 * 14.            add w to the end of Q
 *  
 *  For every undirected graph G = (V, E) in adjacency-list representation
 *    - At the conclusion of UCC, for every pair u,v of vertices, cc(u) = cc(v) iif u and v belong to the same connected component of G
 *    - The running time of UCC is O(m +n), where m = |E| and n = |V|
 *
 *
 *
