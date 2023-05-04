/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /* index approach */
  // let max_profit = 0;
  // for(let left=0, right=1; right<prices.length; right++) {
  //   const diff = prices[right] - prices[left];
  //   if(diff < 0) {
  //     left = right;
  //   } else {
  //     if(diff > max_profit) {
  //       max_profit = prices[right] - prices[left];  
  //     }
  //   }
  // }
  // return max_profit;
  
  /* best approach */
  let profit = 0;
  let buy = Infinity;
  for(let i=0; i<prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
  
  /* dp approach */
  // const n = prices.length;
  // let dp = new Array(n);
  // dp[0] = new Array(2);
  // dp[0][0] = 0; // max profit
  // dp[0][1] = -prices[0]; // least price
  // for(let i=1; i<n; i++) {
  //   dp[i] = new Array(2);
  //   dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
  //   dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  // }
  // return dp[n-1][0];
};