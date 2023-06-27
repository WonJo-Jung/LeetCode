/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let visited = [];
  for(let i=0; i<grid.length; i++) visited[i] = new Array(grid[0].length).fill(false);
  let curry = -1, currx = -1;
  for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
      if(grid[i][j] === 1) { curry = i; currx = j; break;}
    }
    if(curry !== -1 && currx !== -1) break;
  }  
  let stack = [[curry, currx]], answer = 0;
  while(stack.length > 0) {
    let node = stack.pop();
    if(visited[node[0]][node[1]]) continue;
    else visited[node[0]][node[1]] = true;
    let perimeter = 4;
    if(node[0]-1 >= 0 && grid[node[0]-1][node[1]] === 1) { // up
      perimeter--;
      if(!visited[node[0]-1][node[1]]) stack[stack.length] = [node[0]-1, node[1]];
    }
    if(node[0]+1 < grid.length && grid[node[0]+1][node[1]] === 1) { // down
      perimeter--;
      if(!visited[node[0]+1][node[1]]) stack[stack.length] = [node[0]+1, node[1]];
    }
    if(node[1]-1 >= 0 && grid[node[0]][node[1]-1] === 1) { // left
      perimeter--;
      if(!visited[node[0]][node[1]-1]) stack[stack.length] = [node[0], node[1]-1];
    }
    if(node[1]+1 < grid[0].length && grid[node[0]][node[1]+1] === 1) { // right
      perimeter--;
      if(!visited[node[0]][node[1]+1]) stack[stack.length] = [node[0], node[1]+1];
    }
    answer += perimeter;
  }
  return answer;
};