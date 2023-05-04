/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
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
  
  let profit = 0;
  let buy = Infinity;
  for(let i=0; i<prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};