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
var rightSideView = function(root) {
  let answer = [];
  if(!root) return answer;
  let queue = [root];
  while(queue.length) {
    answer[answer.length] = queue[queue.length-1].val;
    let len = queue.length;
    for(let i=0; i<len; i++) {
      let node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return answer;
};