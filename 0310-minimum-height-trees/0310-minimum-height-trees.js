/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if(!edges.length) return [0];
  let graph = [];
  for(let i=0; i<n; i++) graph[i] = [];
  edges.forEach(edge => {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  });
  let leaves = [], newLeaves = [], inDegree = [];
  for(let i=0; i<n; i++) {
    if(graph[i].length === 1) leaves.push(i);
    inDegree.push(graph[i].length);
  }
  while(n > 2) {
    leaves.forEach(leaf => {
      graph[leaf].forEach(adj => {
        if(--inDegree[adj] === 1) newLeaves.push(adj);
      });
    });
    n -= leaves.length;
    leaves = newLeaves;
    newLeaves = [];
  }
  return leaves;
};