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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root.left === null && root.right === null) return [""+root.val];
  let left = [], right = [];
  if(root.left !== null) left = binaryTreePaths(root.left);
  if(root.right !== null) right = binaryTreePaths(root.right);
  return left.map(node => root.val+"->"+node).concat(right.map(node => root.val+"->"+node));
};