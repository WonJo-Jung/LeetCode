/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let bool = new Array(1001).fill(false);
  for(let i=0; i<nums1.length; i++) {
    bool[nums1[i]] = true;
  }
  let answer = [];
  for(let j=0; j<nums2.length; j++) {
    if(bool[nums2[j]]) {
      answer.push(nums2[j]);
      bool[nums2[j]] = false;
    }
  }
  return answer;
};