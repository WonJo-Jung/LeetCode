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
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let queue = [], answer = [];
  queue.push(root);
  while(queue.length) {
    let arr = [], len = queue.length;
    while(len--) {
      let node = queue.shift();
      if(!(answer.length % 2)) arr.push(node.val);
      else arr.unshift(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    answer.push(arr);
  }
  return answer;
};