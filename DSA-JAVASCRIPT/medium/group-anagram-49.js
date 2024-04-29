/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let sorted = strs.map((item) => item.split("").sort().join(""));

  let map = {};

  for (let i = 0; i < strs.length; i++) {
    if (map[sorted[i]] == undefined) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }

  return Object.values(map);
};

let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);
