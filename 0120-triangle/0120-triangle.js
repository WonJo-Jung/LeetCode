/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = new Array(n).fill(0); // f(0)
  dp[0] = triangle[0][0]; // f(1)
  for(let i=2; i<=n; i++) { // f(2)
    for(let j=0; j<i; j++) {
      dp[j] = triangle[i-1][j] + Math.min(j-1<0 ? Infinity : triangle[i-2][j-1], j+1 === i ? Infinity : triangle[i-2][j]);
    }
    for(let j=0; j<i; j++) {
      triangle[i-1][j] = dp[j];
    }
  }
  return Math.min.apply(null, dp);
};