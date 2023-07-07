/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = [], visited = [], m = grid.length, n = grid[0].length;
  for(let i=0; i<m+1; i++) visited[i] = new Array(n+1).fill(-1);
  
  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(grid[i][j] === "1") {
        
        if(visited[i][j+1] === -1 && visited[i+1][j] === -1) {
          islands.push([[i,j]]);
          visited[i+1][j+1] = islands.length-1;
        }
        else if(visited[i][j+1] === -1) {
          islands[visited[i+1][j]].push([i,j]);
          visited[i+1][j+1] = visited[i+1][j];
        }
        else if(visited[i+1][j] === -1) {
          islands[visited[i][j+1]].push([i,j]);
          visited[i+1][j+1] = visited[i][j+1];
        }
        else {
          if(visited[i][j+1] !== visited[i+1][j]) {
            let left = islands[visited[i+1][j]];
            while(left.length) {
              let pos = left.shift();
              visited[pos[0]+1][pos[1]+1] = visited[i][j+1];
              islands[visited[i][j+1]].push(pos);
            }
          }
          islands[visited[i][j+1]].push([i,j]);
          visited[i+1][j+1] = visited[i][j+1];
        }
        
      }
    }
  }
  return islands.filter(island => island.length).length;
};