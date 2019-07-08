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

}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.showGraph(); // returns graph
graph.graphDfs(0);
