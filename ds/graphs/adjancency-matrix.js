/*
 * Representing a graph using adjancency matrix
 *
*/
class Graph {
	constructor() {
		this.AdjencencyMatrix = Array(10);
		for (let i = 0; i < 10; i++) {
				this.AdjencencyMatrix[i] = Array(10);
		}
	}
	getMatrix() {
		return this.AdjencencyMatrix;
	}
	edges(i, j) {
		this.AdjencencyMatrix[i][j] = true;
		return this.AdjencencyMatrix;
	}
}

const graph = new Graph();
graph.edges(0, 1);
graph.edges(1, 3);
graph.edges(1, 4);
graph.edges(2, 4);
console.log(graph.getMatrix());