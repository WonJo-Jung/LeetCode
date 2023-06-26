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
var minDepth = function(root) {
  if(root === null) return 0;
  if(root.left === null && root.right === null) return 1;
  let left = minDepth(root.left), right = minDepth(root.right);
  if(left === 0 && right !== 0) return 1+right;
  else if(left !== 0 && right === 0) return 1+left;
  else return 1+Math.min(left, right);
};