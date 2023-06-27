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
var postorderTraversal = function(root) {
  let answer = [];
  if(root !== null) {
    let stack = [root];
    while(stack.length > 0) {
      let node = stack.pop();
      answer.unshift(node.val);
      if(node.left !== null) stack[stack.length] = node.left;
      if(node.right !== null) stack[stack.length] = node.right;
    }
  }
  return answer;
};