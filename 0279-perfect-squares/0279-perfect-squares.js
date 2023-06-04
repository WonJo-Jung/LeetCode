/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = [0];
  for(let i=1; i<=n; i++) {
    let least = i; // only consists of 1
    for(let j=Math.floor(Math.sqrt(i)); j>=2; j--) {
      least = Math.min(least, dp[i-(j*j)]+1);
    }
    dp[i] = least;
  }
  return dp[n];
};