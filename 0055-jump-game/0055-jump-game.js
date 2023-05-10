/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length;
  for(let i=1; i<=n-1; i++) {
    let count = 0;
    for(let j=0; j<i; j++) {
      if(nums[j] >= i-j) count++;
    }
    if(!count) return false;
  }
  return true;
};