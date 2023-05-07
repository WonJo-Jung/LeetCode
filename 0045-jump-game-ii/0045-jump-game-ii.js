/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let n = nums.length;
  let dp = new Array(n).fill(Infinity);
  dp[0] = 0;
  for(let i=1; i<n; i++) {
    for(let count=0; count<i; count++) {
      if(nums[count] >= i-count && dp[count]+1 < dp[i]) {
        dp[i] = dp[count]+1;
      }
    }
  }
  return dp[n-1];
};