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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let answer = [];
  if(root !== null) {
    let stack = [root];
    while(stack.length > 0) {
      let node = stack.pop();
      answer[answer.length] = node.val;
      if(node.right !== null) stack[stack.length] = node.right;
      if(node.left !== null) stack[stack.length] = node.left;
    }
  }
  return answer;
};