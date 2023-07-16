/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a,b) => a-b);
  let l = 0, r = nums.length, m;
  while(l<r) {
    m = Math.floor((l+r)/2);
    if(nums[m] > m) r = m;
    else l = m+1;
  }
  return l;
};