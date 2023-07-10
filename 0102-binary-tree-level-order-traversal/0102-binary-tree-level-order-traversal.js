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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let queue = [], answer = [];
  queue.push(root);
  while(queue.length) {
    let arr = [], len = queue.length;
    while(len--) {
      let node = queue.shift();
      arr.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    answer.push(arr);
  }
  return answer;
};