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
var sumNumbers = function(root) {
  let answer = 0;
  rootToLeaf(root, "");
  return answer;
  
  function rootToLeaf(root, str) {
    if(!root) return -1;
    str += root.val;
    let left = rootToLeaf(root.left, str), right = rootToLeaf(root.right, str);
    if(left === -1 && right === -1) answer += str * 1;
  }
};