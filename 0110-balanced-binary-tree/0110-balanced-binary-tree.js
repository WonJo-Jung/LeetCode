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
var isBalanced = function(root) {
  if(root === null) return true;
  let left = subTree(root.left), right = subTree(root.right);
  if(Number.isInteger(left) && Number.isInteger(right) && Math.abs(left-right) <= 1) return true;
  else return false;
};

let subTree = function(node) {
  if(node === null) return 0;
  if(node.left === null && node.right === null) return 1;
  let left = subTree(node.left), right = subTree(node.right);
  if(Number.isInteger(left) && Number.isInteger(right) && Math.abs(left-right) <= 1) return 1+Math.max(left, right);
  else return false;
}