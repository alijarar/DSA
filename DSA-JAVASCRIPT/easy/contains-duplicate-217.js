/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

// with Javascript SET
// let check=false;
//     let hash=new Set();
//     for(let i=0;i<nums.length;i++){

//         if(hash.has(nums[i])){
//             return true
//         }
//         hash.add(nums[i])
//     }
//     return false

// Test

// let consoleResult = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);   //true
let consoleResult = containsDuplicate([1, 2, 3, 4]); //false
console.log(consoleResult);
