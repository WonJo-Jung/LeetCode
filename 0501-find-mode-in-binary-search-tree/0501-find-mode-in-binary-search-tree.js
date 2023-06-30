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
var findMode = function(root) {
  let stack = [root], map = new Map();
  while(stack.length > 0) {
    let node = stack.pop();
    if(map.has(node.val)) map.set(node.val, map.get(node.val)+1);
    else map.set(node.val, 1);
    if(node.right !== null) stack[stack.length] = node.right;
    if(node.left !== null) stack[stack.length] = node.left;
  }
  console.log(map);
  let max = Math.max.apply(null, Array.from(map.values()));
  let answer = [];
  map.forEach((val, key) => {
    if(val === max) answer[answer.length] = key;
  });
  return answer;
};