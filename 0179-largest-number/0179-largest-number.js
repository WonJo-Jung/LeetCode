/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let str = [nums[0]];
  for(let i=1; i<nums.length; i++) {
    let j=0;
    for(; j<str.length; j++) {
      if(Number(""+nums[i]+str[j]) > Number(""+str[j]+nums[i])) {
        str = str.slice(0, j).concat(nums[i]).concat(str.slice(j));
        break;
      }
    }
    if(j === str.length) str[str.length] = nums[i];
  }
  if(str[0] === 0) return "0";
  return str.join("");
};