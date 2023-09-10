/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  for(let j=0; j<n; j++) {
    while(i<m && nums1[i] <= nums2[j]) i++;
    nums1.splice(i++, 0, nums2[j]);
    m++;
  }
  nums1.splice(m, nums1.length);
};