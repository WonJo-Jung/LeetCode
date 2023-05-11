/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for(let i=1; i<n; i++) {
    grid[0][i] += grid[0][i-1];
  }
  for(let i=1; i<m; i++) {
    grid[i][0] += grid[i-1][0];
    for(let j=1; j<n; j++) {
      grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
    }
  }
  return grid[m-1][n-1];

  // let array = new Array(n);
  // array[0] = grid[0][0];
  // for(let i=1; i<n; i++) {
  //   array[i] = grid[0][i] + array[i-1];
  // }
  // for(let i=1; i<m; i++) {
  //   array[0] += grid[i][0];
  //   for(let j=1; j<n; j++) {
  //     array[j] = grid[i][j] + Math.min(array[j-1], array[j]);
  //   }
  // }
  // return array[n-1];
};