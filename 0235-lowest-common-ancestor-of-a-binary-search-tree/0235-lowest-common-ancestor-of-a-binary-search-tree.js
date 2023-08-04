/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let answer = null;
  traverse(root, p, q); // boolean
  return answer;
  
  function traverse(node, p, q) {
    if(!node) return false;
    let mid = node.val === p.val || node.val === q.val;
    let left = traverse(node.left, p, q);
    let right = traverse(node.right, p, q);
    if(!answer && ((mid&&left) || (mid&&right) || (left&&right))) answer = node;
    if(mid || left || right) return true;
    else return false;
  }
};