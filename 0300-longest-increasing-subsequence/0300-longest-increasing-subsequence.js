/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let tails = new Array(nums.length);
  let size = 0;
  for(const x of nums) {
    let i=0; j=size;
    while(i !== j) {
      let m = Math.floor((i+j) / 2);
      if(tails[m] < x) i = m+1;
      else j = m;
    }
    tails[i] = x;
    if(i === size) size++;
  }
  return size;
  
  /* DP
  let n = nums.length;
  let dp = new Array(n).fill(1);
  for(let i=0; i<n; i++) {
    for(let j=0; j<i; j++) {
      if(nums[i] > nums[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
    }
  }
  return Math.max.apply(null, dp);
  */
  /* Heap OOM
  let n=1;
  let dp = new Array(nums.length).fill().map((_,idx) => idx);
  while(dp.length > 0) { // length=n, strictly increasing subsequences
    let arr = [];
    for(let i=0; i<dp.length; i++) {
      for(let j=dp[i]+1; j<nums.length; j++) {
        if(nums[dp[i]] < nums[j]) arr[arr.length] = j;
      }
    }
    dp = arr;
    n++;
  }
  return n-1;
  */
};