/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.some(n => n==0)) return 0;
    const counts = nums.filter(n => n<0).length;
    if(counts % 2 == 0) return 1;
    else return -1;
};