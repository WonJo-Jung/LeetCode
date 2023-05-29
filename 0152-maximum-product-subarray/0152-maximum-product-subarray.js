/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0], min = nums[0], result = nums[0];
  for(let i=1; i<nums.length; i++) {
    let product = max;
    max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
    min = Math.min(Math.min(product * nums[i], min * nums[i]), nums[i]);
    if(result < max) result = max;
    // if(max < product) max = product;
    // for(let j=i-1; j>=0; j--) {
    //   product *= nums[j];
    //   if(max < product) max = product;
    // }
  }
  return result;
  // return max;
};