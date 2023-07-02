/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return root;
  let start = root;
  while(start) {
    let curr = start, next = null, left = curr.left, right;
    while(curr) {
      while(!left) {
        if(left === curr.left && curr.right) left = curr.right;
        else {
          curr = curr.next;
          if(curr) left = curr.left;
          else break;
        }
      }
      if(curr) {
        if(!next) next = left;
        if(left === curr.left) right = curr.right;
        else {
          curr = curr.next;
          if(curr) right = curr.left;
          else break;
        }
        while(!right) {
          if(right === curr.left && curr.right) right = curr.right;
          else {
            curr = curr.next;
            if(curr) right = curr.left;
            else break;
          }
        }
        if(curr) {
          left.next = right;
          left = right;
        }
      }
    }
    start = next;
  }
  return root;
};