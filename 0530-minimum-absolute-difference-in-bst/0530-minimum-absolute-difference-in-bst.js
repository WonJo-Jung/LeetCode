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
var getMinimumDifference = function(root) {
  let vals = getmin(root), diff = Infinity;
  for(let i=1; i<vals.length; i++) {
    if(diff > vals[i]-vals[i-1]) diff = vals[i]-vals[i-1];
  }
  return diff;
};

let getmin = function(root) {
  if(root.left === null && root.right === null) return [root.val];
  let left = [], right = [];
  if(root.left !== null) left = getmin(root.left);
  if(root.right !== null) right = getmin(root.right);
  return left.concat([root.val]).concat(right);
}