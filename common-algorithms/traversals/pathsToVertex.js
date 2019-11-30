function pathsToVertex(graph, v) {
  for (let i = 0; i < graph.length; i++) {
    const pos = graph[i].slice(1).indexOf(v)
    console.log(graph[i][pos])
    // return (graph[i][0] !== 'a' && v)  && pathsToVertex(graph, graph[i][pos]) 
  }
}

const graph = [
  ['a', 'b', 'd'],
  ['b', 'c'],
  ['c'],
  ['d', 'c'],
]

pathsToVertex(graph, 'c', 'a')
