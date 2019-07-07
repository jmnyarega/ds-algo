/*
 * Representing a graph using adjancency matrix
 *
*/
class Graph {

  constructor() {
    this.Adj = Array(10);
    for (let i = 0; i < 10; i++) {
      this.AdjencencyMatrix[i] = Array(10);
    }
  }

  addEdges(i, j) {
    this.Adj[i][j] = true;
    return this.Adj;
  }

  showGraph() {
    return this.Adj;
  }

}

const graph = new Graph();
graph.addEdges(0, 1);
graph.addEdges(1, 3);
graph.addEdges(1, 4);
graph.addEdges(2, 4);
graph.showGraph(); // constructed graph
