/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if(obstacleGrid[0][0] || obstacleGrid[m-1][n-1]) return 0;
  let array = new Array(n);
  for(let i=0; i<n; i++) {
    if(!obstacleGrid[0][i]) array[i] = 1;
    else {
      for(let j=i; j<n; j++) {
        array[j] = 0;
      }
      break;
    }
  }
  for(let i=1; i<m; i++) {
    if(obstacleGrid[i][0]) array[0] = 0;
    for(let j=1; j<n; j++) {
      if(obstacleGrid[i][j]) array[j] = 0;
      else array[j] += array[j-1];
    }
  }
  return array[n-1];
};