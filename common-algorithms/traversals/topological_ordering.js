/*
 * @TopoSort
 *
 *
 * Input: directed acyclic graph G = (V, E) in adjancency-list representation
 * PostCondition: the f-values of vertices constitute a topological ordering og G
 *
 * @Pseudocode:
 * - mark all vertices as unexplored
 * - curLabel := |V|  -> keeps track of ordering
 *  for every v ∊ V do
 *    if v is unexplored then 
 *      DFS-Topo(G, v)
 *
 * DFS-Topo
 * Input: graph G=(V,E) in adjancency-list represantion, and a vertex s ∊ V
 * PostCondition: every vertex reachable from s is marked as "explored" and has an assigned f-value
 *
 * @Pseudocode
 *  - mark s as explored
 *  - for each edge (s,v) in s's outgoing adjancency list do
 *      - if v is unexplored then
 *          - DFS-Topo(G, v)
 *
 *    f(s) := curLabel  => s's position in ordering 
 *    curLabel := curLabel - 1  => work right-to-left
 */


