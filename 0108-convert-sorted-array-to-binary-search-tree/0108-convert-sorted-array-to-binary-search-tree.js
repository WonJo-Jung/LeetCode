/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, s=0, e=nums.length-1) {
  if(s > e) return null;
  let mid = Math.floor((s+e)/2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, s, mid-1);
  root.right = sortedArrayToBST(nums, mid+1, e);
  return root;
};