/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums.sort((a,b) => b-a);
  let max = nums[0], num = nums[0], level = 1;
  for(let i=1; i<nums.length; i++) {
    if(level === 3) break;
    if(num === nums[i]) continue;
    num = nums[i];
    level++;
  }
  if(level === 3) return num;
  else return max;
};