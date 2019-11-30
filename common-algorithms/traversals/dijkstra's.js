const PriorityQueue = require('../../ds/queue/priorityQueue');


/* Problem: Single-source shortest path problem
 * Input: A directed graph G = (V, E),  a starting vertex s ∊ V, and a nonnegative length l for each edge e ∊ E 
 *
 * Output: dist(s, v) -> length of a shortest path from s to v for every vertex v ∊ V
 *
 * Pseudocode:
 *  // initialization
 *  X :=  {s}
 *  len(s) := 0, l(v) := +∞ for every v ≠s
 *  // Main loop
 *  While there is an edge (v,w) with v ∊ X , w ∉ do
 *   - (v∗, w∗) := such an edge minimizing len(v) + l(vw)
 *   - add w∗ to X
 *   - len(w∗) := len(v∗) + l(v∗w∗)
 * /

















/*  Time and Space Complexity
 *    What's the time complexity?
 *     - Our initialization involves a constant amount of work per node, plus inserting O(N)O(N) nodes into priorityQueue will take - 
 *       O(N*lg(N))O(N∗lg(N)) time. (Priority queues are built on heaps, which have O(\lg{n})O(lgn) insertions ↴ ) That's O(N*lg(N))O(N∗lg(N)) -
 *       time overall for all the initialization work.
 *
 *     - We'll go through the loop O(N)O(N) times, and each time we call removeMin(), taking O(lg(N))O(lg(N)) time (assuming a heap-based -
 *       priority queue). Over the entire algorithm, that's O(N*lg(N))O(N∗lg(N)) time.
 *
 *     - We'll update costInQueue once per edge, or O(M)O(M) times. Each priority queue update costs O(lg(N))O(lg(N)) time. - 
 *       That's O(M*lg(N))O(M∗lg(N)) time overall.
 *
 *     - Putting all the steps together, the time complexity for Dijkstra's algorithm is O(N*lg(N) + M*lg(N))O(N∗lg(N)+M∗lg(N)). Sometimes,- 
 *       this complexity is written O((N + M)lg(n))O((N+M)lg(n)).
 *
 * What about space complexity? All our data structures hold a constant amount of data for each node in the graph. That's O(N)O(N) space in total.
 */
