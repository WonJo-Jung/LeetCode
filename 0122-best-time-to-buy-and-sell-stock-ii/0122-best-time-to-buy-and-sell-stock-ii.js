/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  let answer = 0;
  for(let i=1; i<n; i++) {
    if(prices[i] > prices[i-1]) answer += prices[i] - prices[i-1];
  }
  return answer;
};