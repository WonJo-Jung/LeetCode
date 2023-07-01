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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let now = root;
  while(now) {
    if(now.left) {
      let pre = now.left;
      while(pre.right) pre = pre.right;
      pre.right = now.right;
      now.right = now.left;
      now.left = null;
    }
    now = now.right;
  }
};