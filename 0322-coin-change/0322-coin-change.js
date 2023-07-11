/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(!amount) return 0;
  coins.sort((a,b) => b-a);
  let level = 0, queue = [0];
  let dp = [];
  dp[0] = 0;
  while(queue.length) {
    let len = queue.length;
    while(len--) {
      let val = queue.shift();
      for(let i=0; i<coins.length; i++) {
        if(val+coins[i] <= amount) {
          if(!dp[val+coins[i]]) {
            dp[val+coins[i]] = level+1;
            queue.push(val+coins[i]);
          }
        }
      }
    }
    if(dp[amount]) return dp[amount];
    level++;
  }
  return -1;
};