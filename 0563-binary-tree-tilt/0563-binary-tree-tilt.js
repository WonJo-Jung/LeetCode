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
var findTilt = function(root) {
  if(!root) return 0;
  let sum = 0;
  
  function findSum(node) {
    if(!node) return 0;
    let left = findSum(node.left);
    let right = findSum(node.right);
    sum += left > right ? left-right : right-left;
    return node.val + left + right;
  }
  
  let left = findSum(root.left);
  let right = findSum(root.right);
  sum += left > right ? left-right : right-left;
  return sum;
};