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
 * @return {number}
 */
var rob = function(root) {
  return robSub(root, new Map());
  
  function robSub(root, map) {
    if(!root) return 0;
    if(map.has(root)) return map.get(root);
    let val = 0;
    if(root.left) val += robSub(root.left.left, map) + robSub(root.left.right, map);
    if(root.right) val += robSub(root.right.left, map) + robSub(root.right.right, map);
    val = Math.max(val + root.val, robSub(root.left, map) + robSub(root.right, map));
    map.set(root, val);
    return val;
  }
};