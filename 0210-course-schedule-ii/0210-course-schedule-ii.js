/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let graph = [], ans = [], indegree = new Array(numCourses).fill(0);
  for(let i=0; i<numCourses; i++) graph[i] = [];
  prerequisites.forEach(pre => {
    graph[pre[1]].push(pre[0]);
    indegree[pre[0]]++;
  });
  for(let i=0; i<numCourses; i++) if(indegree[i] === 0) dfs(i);
  if(ans.length === numCourses) return ans;
  return [];
  
  function dfs(cur) {
    ans.push(cur);
    indegree[cur] = -1;
    graph[cur].forEach(nextCourse => {
      if(--indegree[nextCourse] === 0) dfs(nextCourse);
    });
  }
};