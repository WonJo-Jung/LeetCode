/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let nums = [0,1];
  if(n === 0) return nums[0];
  else if(n === 1) return nums[1];
  let max = nums[1];
  for(let i=2; i<=n; i++) {
    if(i % 2 === 0) nums[i] = nums[i/2];
    else nums[i] = nums[(i-1)/2] + nums[(i-1)/2+1];
    max = max < nums[i] ? nums[i] : max;
  }
  return max;
};