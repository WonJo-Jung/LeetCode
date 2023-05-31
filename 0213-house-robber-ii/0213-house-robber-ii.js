/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1) return nums[0];
  else if(nums.length <= 3) return Math.max.apply(null, nums);
  let dp = [], s, e, acc;
  for(let i=0; i<nums.length; i++) {
    s = i+2, e = i-2;
    if(s > nums.length) s -= nums.length;
    if(e < 0) e += nums.length;
    if(s === e) {
      dp[i] = nums[i] + nums[s];
      continue;
    }
    else if(s < e && e-s === 1) {
        dp[i] = nums[i] + Math.max(nums[s], nums[e]);
        continue;
    }
    if(s < e) acc = JSON.parse(JSON.stringify(nums.slice(s, e+1)));
    else acc = JSON.parse(JSON.stringify(nums.slice(s).concat(nums.slice(0,e+1))));
    for(let i=acc.length-3; i>=0; i--) {
      acc[i] += Math.max.apply(null, acc.slice(i+2));
    }
    dp[i] = nums[i] + Math.max.apply(null, acc);
  }
  return Math.max.apply(null, dp);
};