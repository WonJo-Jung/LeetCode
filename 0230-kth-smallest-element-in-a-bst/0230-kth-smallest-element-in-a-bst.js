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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let values = sortedVals(root);
  return values[k-1];
  
  function sortedVals(node) {
    if(!node) return [];
    return sortedVals(node.left).concat([node.val]).concat(sortedVals(node.right));
  }
};