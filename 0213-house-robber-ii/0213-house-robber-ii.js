/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1) return nums[0];
  else if(nums.length <= 3) return Math.max.apply(null, nums);
  let dp = 0, s, e, pprev, prev, cur;
  for(let i=0; i<nums.length; i++) {
    s = i+2, e = i-2;
    if(s > nums.length) s -= nums.length;
    if(e < 0) e += nums.length;
    if(s === e || (s < e && e-s === 1)) {
      if(s === e) dp = Math.max(dp, nums[i] + nums[s]);
      else dp = Math.max(dp, nums[i] + Math.max(nums[s], nums[e]));
      continue;
    }
    pprev = 0, prev = 0, cur = 0;
    for(let j=s; j !== e+1; j++) {
      if(j >= nums.length) j -= nums.length;
      cur = Math.max(prev, nums[j]+pprev);
      pprev = prev;
      prev = cur;
    }
    dp = Math.max(dp, nums[i] + cur);
  }
  return dp;
};