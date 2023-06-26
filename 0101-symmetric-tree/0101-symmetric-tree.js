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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isSymmetricHelp(root.left, root.right);
};

let isSymmetricHelp = function(left, right) {
  if(left === null || right === null) return left === right;
  if(left.val !== right.val) return false;
  return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
}