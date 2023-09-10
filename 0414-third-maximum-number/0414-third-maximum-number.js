/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let arr = Array.from(new Set(nums));
  if(arr.length < 3) return Math.max.apply(null, nums);
  else return arr.sort((a,b) => b-a)[2];
};