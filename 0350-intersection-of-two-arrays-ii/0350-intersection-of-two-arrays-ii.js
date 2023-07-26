/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let comparator, comparatee;
  if(nums1.length > nums2.length) {
    comparator = nums2;
    comparatee = nums1.sort((a,b) => {return a-b;});
  }
  else {
    comparator = nums1;
    comparatee = nums2.sort((a,b) => {return a-b;});
  }
  let answer = [];
  for(let i=0; i<comparator.length; i++) {
    if(binarySearch(comparator[i])) answer.push(comparator[i]);
  }
  return answer;
  
  function binarySearch(num) {
    let left = 0, right = comparatee.length - 1, mid;
    while(left <= right) {
      mid = Math.floor((left+right)/2);
      if(comparatee[mid] === num) {
        comparatee.splice(mid, 1);
        return true;
      }
      else if(comparatee[mid] < num) left = mid + 1;
      else right = mid - 1;
    }
    return false;
  }
};