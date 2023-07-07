/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let courses = [];
  while(prerequisites.length) {
    let [post, pre] = prerequisites.pop();
    if(post === pre) return false;    
    for(let i=0; i<courses.length; i++) {
      if(pre === courses[i][0]) {
        if(courses[i].includes(post)) return false;
        else courses[i].unshift(post);
      }
      if(courses[i][courses[i].length-1] === post) {
        if(courses[i].includes(pre)) return false;
        else courses[i].push(pre);
      }
    }
    courses.push([post, pre]);
  }
  return courses.filter(course => course.length === numCourses).length > 1 ? false : true;
};