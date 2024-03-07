function twoSum(nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
    console.log(numIndices);
  }

  return null;
}

let result = twoSum([2, 7, 11, 15], 13);
console.log(result);
