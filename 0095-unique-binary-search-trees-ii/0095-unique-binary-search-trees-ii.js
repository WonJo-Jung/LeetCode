/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// var generateTrees = function(n, l = 1, r = n, res = []) {
var generateTrees = function(n) {
  let bsts = new Array(n+1);
  bsts[0] = [null], bsts[1] = [{val:1, left:null, right:null}];
  for(let i=2; i<=n; i++) {
    bsts[i] = [];
    for(let j=1; j<=i; j++) {
      for(const nodeL of bsts[j-1]) {
        for(const nodeR of bsts[i-j]) {
          let node = {val:j};
          node.left = nodeL;
          node.right = clone(nodeR, j);
          bsts[i][bsts[i].length] = node;
        }
      }
    }
  }
  return bsts[n];
  // for(let i = l; i <= r; i++){
  //   for(const left of generateTrees(n, l, i - 1)){
  //     for(const right of generateTrees(n, i + 1, r)){
  //         res.push(new TreeNode(i, left, right));
  //     }
  //   }
  // }
  // return n ? res.length ? res : [null] : [];
};

/**
 * @param {TreeNode} node 
 * @param {number} offset 
 */
let clone = function(node, offset) {
  if(node === null) return null;
  let newNode = {val:node.val + offset};
  newNode.left = clone(node.left, offset);
  newNode.right = clone(node.right, offset);
  return newNode;
}