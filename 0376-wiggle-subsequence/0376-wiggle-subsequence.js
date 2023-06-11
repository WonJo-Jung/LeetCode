/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  let wiggle, len = 1;
  for(let i=1; i<nums.length; i++) {
    if(nums[i-1] !== nums[i]) {
      if(wiggle === undefined) {
        wiggle = nums[i-1] < nums[i] ? true : false; // big = true, small = false
        len++;
      }
      else if ( (wiggle && nums[i-1] > nums[i]) || (!wiggle && nums[i-1] < nums[i]) ) {
        wiggle = !wiggle;
        len++;
      }
    }
  }
  return len;
};