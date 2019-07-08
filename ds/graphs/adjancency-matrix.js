/*
 * Representing a graph using adjancency matrix
 *
*/
class Graph {

  constructor() {
    this.adj = Array(5);
    this.marked = []; // to be used in dfs
    for (let i = 0; i < 5; i++) {
      this.adj[i] = Array(5);
      this.marked[i] = 0;
    }
  }

  addEdges(i, j) {
    this.adj[i][j] = 1;
    return this.adj;
  }

  showGraph() {
    return this.adj;
  }

  graphDfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
      console.log(`${v} has been  Visited`);
    }
    for (let i in this.adj[v]) {
      if (!this.marked[i]) {
        this.graphDfs(i);
      }
    }
  }

}

const graph = new Graph();
graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(2, 4);
graph.addEdges(1, 3);
graph.showGraph();
graph.graphDfs(0);
