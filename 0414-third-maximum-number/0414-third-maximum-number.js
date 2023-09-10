/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let answer = [nums[0]];
  let i=1;
  for(; i<nums.length; i++) {
    if(answer.length === 3) break;
    if(!answer.includes(nums[i])) answer.push(nums[i]);
  }
  answer.sort((a,b) => b-a);
  let max = answer[0], mid = answer[1], min = answer[2];
  for(; i<nums.length; i++) {
    if(nums[i] != min && nums[i] != mid && nums[i] != max) {
      if(min < nums[i] && nums[i] < mid) min = nums[i];
      else if(mid < nums[i] && nums[i] < max) {
        min = mid;
        mid = nums[i];
      }
      else if(max < nums[i]) {
        min = mid;
        mid = max;
        max = nums[i];
      }
    }
  }
  if(answer.length === 3) return min;
  else return answer[0];
};