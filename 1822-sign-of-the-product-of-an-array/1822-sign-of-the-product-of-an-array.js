/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const counts = nums.filter(n => n<0).length;
    if(nums.some(n => n==0)) return 0;
    else if(counts % 2 == 0) return 1;
    else return -1;
};