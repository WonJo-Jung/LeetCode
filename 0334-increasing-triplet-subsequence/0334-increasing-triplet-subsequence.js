/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let left, mid, right=nums[0];
  for(let i=1; i<nums.length; i++) {
    if(right < nums[i]) {left = mid; mid = right; right = nums[i];}
    else if(right > nums[i]) {
      if(mid < nums[i] || mid === undefined) right = nums[i];
      else if(mid > nums[i]) {
        if(left < nums[i] || left === undefined) mid = nums[i];
        else if(left > nums[i]) left = nums[i];
      }
    }
  }
  return (left < mid) && (mid < right);
};