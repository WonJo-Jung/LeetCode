/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(!node) return node;
  let stack = [node], root, map = new Map();
  while(stack.length) {
    let n = stack.pop();
    if(!map.has(n.val)) {
      let new_node = new Node(n.val);
      map.set(new_node.val, new_node);
    }
    let new_node = map.get(n.val);
    if(new_node.val === 1) root = new_node;
    let nfriends = n.neighbors;
    for(let i=0; i<nfriends.length; i++) {
      if(!map.has(nfriends[i].val)) {
        stack[stack.length] = nfriends[i];
        let new_friend = new Node(nfriends[i].val);
        new_friend.neighbors.push(new_node);
        new_node.neighbors.push(new_friend);
        map.set(new_friend.val, new_friend);
      } else {
        let new_friend = map.get(nfriends[i].val);
        let already = false;
        for(let i=0; i<new_friend.neighbors.length; i++) {
          if(new_friend.neighbors[i].val === new_node.val) already = true;
        }
        if(!already) {
          new_friend.neighbors.push(new_node);
          new_node.neighbors.push(new_friend);
        }
      }
    }
  }
  return root;
};