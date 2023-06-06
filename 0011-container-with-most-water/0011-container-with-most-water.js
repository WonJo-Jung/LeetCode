/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length-1;
  let max = (r-l) * Math.min(height[l], height[r]);
  while(l<r) {
    if(height[l] <= height[r]) l++;
    else r--;
    max = Math.max(max, (r-l) * Math.min(height[l], height[r]));
  }
  return max;
};