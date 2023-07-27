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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {  
  function findSubtree(node, subNode) {
    if(!node && !subNode) { // both null
      return true;
    } else if(!node || !subNode) { // either null
      return false;
    } else if(node.val === subNode.val) { // neither null, same val
      return findSubtree(node.left, subNode.left) && findSubtree(node.right, subNode.right);
    } else { // neither null, different val
      return false;
    }
  }
  
  let queue = [root];
  while(queue.length) {
    let node = queue.shift();
    if(findSubtree(node, subRoot)) return true;
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return false;
};