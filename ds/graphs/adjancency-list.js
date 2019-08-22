/* 
 * Diagraph
 * multigraph -> A graph with multiple edges
 * general graph(pseudograph) -> both self-loops and parallel edges allowed
 * parallel edges/multi edges -> Two or more edges having the same pair of end vertices
 * simple graph -> A graph with neither parallel edges nor self loops
 * Weighted -> directed/undirected graph with real numbers assigned to each edge.
 * Wighted directed graphs are ofted refered to as a networks
 *
 */

class Graph {

  constructor(vertices) {
    this.vertices = this.vertices;
    this.marked = [];
    this.adj = [];
    for (let i = 0; i < vertices; ++i) {
      this.adj.push([i]);
      this.marked[i] = false;
    }
  }

  showGraph() {
    console.log(this.adj)
    return this.adj;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  graphDfs(v) {
   this.marked[v] = true; // v should be the starting vertex, so we mark it as visited
    if (this.adj[v] !== undefined) {
      console.log(`${v} has been  Visited`);
    }
   for (let i in this.adj) { // I am using the length of the adjacent list -
     // instead of the length of the vertex adjancies, so that I don't ran out of index
      if (!this.marked[i]) { // check for unvisted nodes and make a recursive call
        this.graphDfs(i);
      }
    }
  }

  graphBfs(n) {
    let queue = [];
    this.marked[n] = true;
    queue.push(n);
    while(queue.length > 0) {
      let v = queue.shift(); // remove from front... 
      console.log(`${v} has been visited`);
      for(let i in this.adj) { // looping through vertices, don't want to ran out of index
        if (!this.marked[i]) {
          this.marked[i] = true;
          queue.push(i);
        }
      }
    }
  }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.showGraph(); // returns graph
// graph.graphBfs(0);
