class Graph {
  constructor(vertices) {
    this.vertices = this.vertices;
    this.adj = [];
    for (let i = 0; i < vertices; i++) {
      this.adj.push([i]);
    }
  }

  getAdjancies() {
    return this.adj;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }
}

const x = new Graph(10);
x.addEdge(0, 1);
x.addEdge(0, 2);
x.addEdge(3, 4);
console.log(x.getAdjancies());
