class Graph {

  constructor(vertices) {
    this.vertices = this.vertices;
    this.adj = [];
    for (let i = 0; i < vertices; i++) {
      this.adj.push([i]);
    }
  }

  showGraph() {
    return this.adj;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

}

const graph = new Graph(10);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(3, 4);
graph.showGraph() // returns graph
