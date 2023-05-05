/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  // let dp = new Array(n+2);
  // dp[n] = dp[n+1] = 0;
  // for(let i=n-1; i>=0; i--) {
  //   dp[i] = cost[i] + Math.min(dp[i+1], dp[i+2]);
  // }
  // return Math.min(dp[0], dp[1]);
  
  let first = cost[0], second = cost[1];
  for(let i=2; i<n; i++) {
    let current = cost[i] + Math.min(first, second);
    first = second;
    second = current;
  }
  return Math.min(first, second);
};