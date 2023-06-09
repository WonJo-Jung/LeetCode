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
  while(start.left && start.right) {
    let curr = start;
    while(curr) {
      curr.left.next = curr.right;
      if(curr.next) curr.right.next = curr.next.left;
      curr = curr.next;
    }
    start = start.left;
  }
  // let queue = [root];
  // while(queue.length) {
  //   let count = queue.length;
  //   while(count--) {
  //     let node = queue.shift();
  //     if(count) node.next = queue[0];
  //     if(node.left && node.right) queue.push(node.left, node.right);
  //   }
  // }
  return root;
};