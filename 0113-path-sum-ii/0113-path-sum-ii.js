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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if(!root) return [];
  let answer = [], array = [];
  rootToLeaf(root, targetSum);
  return answer;
  
  function rootToLeaf(root, targetSum) {
    array.push(root.val);
    if(!root.left && !root.right) {
      if(targetSum === root.val) answer.push(JSON.parse(JSON.stringify(array)));
      array.pop();
      return;
    }
    if(root.left) rootToLeaf(root.left, targetSum - root.val);
    if(root.right) rootToLeaf(root.right, targetSum - root.val);
    array.pop();
  };
};