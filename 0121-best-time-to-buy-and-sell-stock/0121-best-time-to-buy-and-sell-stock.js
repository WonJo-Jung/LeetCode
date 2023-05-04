/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max_profit = 0;
  for(let left=0, right=1; right<prices.length; right++) {
    const diff = prices[right] - prices[left];
    if(diff < 0) {
      left = right;
    } else {
      if(diff > max_profit) {
        max_profit = prices[right] - prices[left];  
      }
    }
  }
  return max_profit;
};