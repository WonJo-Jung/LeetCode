/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.some(n => n==0)) return 0;
    const total = nums.reduce((acc, curr) => acc * curr, 1);
    if(total > 0) return 1;
    else return -1;
};