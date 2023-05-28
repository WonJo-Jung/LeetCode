let isPalindrome = function (s, low, high) {
  while(low < high) {
    if(s.charAt(low++) !== s.charAt(high--)) return false;
  }
  return true;
};

let dfs = function(start, result, currentList, s) {
  if(start >= s.length) result[result.length] = JSON.parse(JSON.stringify(currentList));
  for(let end = start; end < s.length; end++) {
    if(isPalindrome(s, start, end)) {
      // add current substring in the currentList
      currentList[currentList.length] = s.substring(start, end+1);
      dfs(end+1, result, currentList, s);
      // backtrack and remove the current substring from currentList
      currentList.pop();
    }
  }
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];
  dfs(0, result, [], s);
  return result;
};

// var partition = function(s, b=0, e=s.length, map=new Map()) {
//   if(e-b === 1) {
//     map.set(`${b},${e}`, [[s]]);
//     return map.get(`${b},${e}`);
//   }

//   let palindrome = [];
//   for(let i = 1; e-i>b; i++) {
//     let left = map.get(`${b},${e-i}`);
//     if(left === undefined) left = partition(s.slice(b, e - i), b, e-i, map);

//     let right = map.get(`${e-i},${e}`);
//     if(right === undefined) right = partition(s.slice(e - i, e), e-i, e, map);

//     for(let j=0; j<left.length; j++) {
//       for(let k=0; k<right.length; k++) {
//         if(left[j].length === 1 && right[k].length === 1 && left[j][0].length === 1 && right[k][0].length === 1) {
//           palindrome[palindrome.length] = [left[j][0], right[k][0]];
//           if(left[j][0] === right[k][0]) {
//             palindrome[palindrome.length] = [left[j][0] + right[k][0]];
//           }
//         } else {
//           let arr = JSON.parse(JSON.stringify(left[j]));
//           for(let l=0; l<right[k].length; l++) {
//             arr[arr.length] = right[k][l];
//           }
//           palindrome[palindrome.length] = arr;
//         }
//       }
//     }
//   }
//   for(let i=0; i<palindrome.length; i++) {
//     palindrome[i] = palindrome[i].join(",");
//   }
//   palindrome = Array.from(new Set([...palindrome]));
//   for(let i=0; i<palindrome.length; i++) {
//     palindrome[i] = palindrome[i].split(",");
//   }
//   map.set(`${b},${e}`, palindrome);
//   return map.get(`${b},${e}`);
// };