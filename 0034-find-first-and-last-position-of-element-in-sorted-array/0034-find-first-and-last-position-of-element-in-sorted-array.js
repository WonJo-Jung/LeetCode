/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left=0, right=nums.length-1, mid;
  let answer = [-1,-1];
  while(left<=right) {
    mid = Math.floor((left+right)/2);
    if(nums[mid] === target) {
      answer = [mid, mid];
      for(let i=mid-1; i>=0; i--) {
        if(nums[i] !== target) break;
        else answer[0] = i;
      }
      for(let j=mid+1; j<nums.length; j++) {
        if(nums[j] !== target) break;
        else answer[1] = j;
      }
      break;
    }
    else if(nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return answer;
};