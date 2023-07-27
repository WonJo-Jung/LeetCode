/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0;
  let queue = [root], depth = 0;
  while(queue.length) {
    let len = queue.length;
    while(len--) {
      let node = queue.shift();
      for(let i=0; i<node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    depth++;
  }
  return depth;
};