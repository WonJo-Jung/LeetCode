/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = [0];
  for(let i=1; i<=n; i++) {
    let square = Math.sqrt(i);
    let least = i; // only consists of 1
    for(let j=Math.floor(square); j>=2; j--) {
      let num = i-(j*j), count = 1;
      count += dp[num];
      least = Math.min(least, count);
    }
    dp[i] = least;
  }
  return dp[n];
};