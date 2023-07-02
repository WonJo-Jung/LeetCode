/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let m = board.length, n = board[0].length;
  if(m <= 2 || n <= 2) return;
  
  let visited = [];
  // up, down, left, right
  let dy = [-1,1,0,0];
  let dx = [0,0,-1,1];
  for(let i=0; i<m; i++) visited[i] = new Array(n).fill(false);
  
  for(let i=0; i<m; i++) { // y-axis
    for(let j=0; j<n; j++) { // x-axis
      if(board[i][j] === "O" && !visited[i][j]) {
        let path = [], stack = [[i,j]]; // y,x
        let flippable = (i === 0 || i === m-1 || j === 0 || j === n-1) ? false : true;
        while(stack.length) {
          let pos = stack.pop();
          visited[pos[0]][pos[1]] = true;
          path.push(pos);
          for(let k=0; k<4; k++) {
            let y = pos[0] + dy[k], x = pos[1] + dx[k];
            if(y >= 0 && y < m && x >= 0 && x < n
               && board[y][x] === "O" && !visited[y][x]) {
              if(y === 0 || y === m-1 || x === 0 || x === n-1) flippable = false;
              stack.push([y, x]);
            }
          }
        }
        if(flippable) {
          for(let k=0; k<path.length; k++) board[path[k][0]][path[k][1]] = "X";
        }
      }
    }
  }
};