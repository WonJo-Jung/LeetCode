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
/** Use Stack
*/
var isSymmetric = function(root) {
  let stack = [], left, right;
  if(root.left !== null) {
    if(root.right === null) return false;
    stack[stack.length] = root.left;
    stack[stack.length] = root.right;
  } else if(root.right !== null) {
    return false;
  }
  
  while(stack.length > 0) {
    if(stack.length%2 !== 0) return false;
    right = stack.pop();
    left = stack.pop();
    if(right.val !== left.val) return false;
    
    if(left.left !== null) {
      if(right.right === null) return false;
      stack[stack.length] = left.left;
      stack[stack.length] = right.right;
    } else if(right.right !== null) return false;
    
    if(left.right !== null) {
      if(right.left === null) return false;
      stack[stack.length] = left.right;
      stack[stack.length] = right.left;
    } else if(right.left !== null) return false;
  }
  
  return true;
};


/** Use Recurse
var isSymmetric = function(root) {
  return isSymmetricHelp(root.left, root.right);
};

let isSymmetricHelp = function(left, right) {
  if(left === null || right === null) return left === right;
  if(left.val !== right.val) return false;
  return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
}
*/