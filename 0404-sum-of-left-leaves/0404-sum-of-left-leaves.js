/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  if(root.left !== null) {
    if(root.left.left === null && root.left.right === null) sum += root.left.val;
    else sum += sumOfLeftLeaves(root.left);
  }
  if(root.right !== null && (root.right.left !== null || root.right.right !== null)) sum += sumOfLeftLeaves(root.right);
  return sum;
};