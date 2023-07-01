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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let stack = [], prev = null;
  while(root !== null || stack.length > 0) {
    while(root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(prev !== null && prev.val >= root.val) return false;
    prev = root;
    root = root.right;
  }
  return true;
  
  /*
  function subBST(root) {
    if(root === null) return [];
    if(root.left === null && root.right === null) return [root.val];
    return subBST(root.left).concat([root.val], subBST(root.right));
  }
  
  let arr = subBST(root.left).concat([root.val], subBST(root.right));
  for(let i=0; i<arr.length-1; i++) if(arr[i] >= arr[i+1]) return false;
  return true;
  */
};