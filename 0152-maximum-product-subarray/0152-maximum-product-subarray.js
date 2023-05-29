/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0];
  for(let i=1; i<nums.length; i++) {
    let product = nums[i];
    if(max < product) max = product;
    for(let j=i-1; j>=0; j--) {
      product *= nums[j];
      if(max < product) max = product;
    }
  }
  return max;
};