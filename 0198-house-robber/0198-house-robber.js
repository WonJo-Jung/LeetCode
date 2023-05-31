/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1) return nums[0];
  if(nums[nums.length-2] < nums[nums.length-1]) nums[nums.length-2] = nums[nums.length-1];
  for(let i=nums.length-3; i>=0; i--) {
    nums[i] += Math.max.apply(null, nums.slice(i+2));
  }
  return Math.max.apply(null, nums);
};