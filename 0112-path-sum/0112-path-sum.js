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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let stack = [root], sum = 0, prev = [];
  while(stack.length > 0) {
    if(stack[stack.length-1] === prev[prev.length-1]) {
      sum -= stack.pop().val;
      prev.pop();
      continue;
    }
    if(stack[stack.length-1] === null) {
      stack.pop();
      continue;
    }
    let node = stack[stack.length-1];
    sum += node.val;
    if(node.left === null && node.right === null) {
      if(sum === targetSum) return true;
      else sum -= stack.pop().val;
    }
    else {
      stack[stack.length] = node.right;
      stack[stack.length] = node.left;
      prev[prev.length] = node;
    }
  }
  return false;
};