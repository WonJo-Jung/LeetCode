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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null || (root.right === null && root.left === null)) return root;
  let tree = new TreeNode(root.val);
  if(root.right !== null) tree.left = invertTree(root.right);
  if(root.left !== null) tree.right = invertTree(root.left);
  return tree;
};