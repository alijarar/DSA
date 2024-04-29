/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashmap = {};
  let bucket = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]] == undefined) {
      hashmap[nums[i]] = 1;
    } else {
      hashmap[nums[i]] += 1;
    }
  }

  for (let [key, value] of Object.entries(hashmap)) {
    if (!bucket[value]) {
      bucket[value] = new Set().add(key);
    } else {
      bucket[value] = bucket[value].add(key);
    }
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
    if (result.length === k) break;
  }
  return result;
};

let result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(result);
