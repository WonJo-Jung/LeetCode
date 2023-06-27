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
  /* From reference */
  if(root === null) return false;
  let stack = [root];
  while(stack.length > 0) {
    let node = stack.pop();
    if(node.left === null && node.right === null && node.val === targetSum) return true;
    if(node.left !== null) stack[stack.length] = new TreeNode(node.val + node.left.val, node.left.left, node.left.right);
    if(node.right !== null) stack[stack.length] = new TreeNode(node.val + node.right.val, node.right.left, node.right.right);
  }
  /* For my own
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
  */
  return false;
};