/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // O(n) space complexity
  let result = [];
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(start);
    start = start * nums[i];
  }

  start = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = start * result[i];
    start = start * nums[i];
  }

  return result;

  // O(n)
  // let result = []
  // let forresult = []
  // let start = 1
  // for (let i = 0; i < nums.length; i++) {
  //     forresult.push(start)
  //     start = start * nums[i]
  // }
  // console.log(forresult)
  // let backresult = []
  // start = 1
  // for (let i = nums.length - 1; i >= 0; i--) {
  //     backresult.unshift(start)
  //     start = start * nums[i]
  // }
  // console.log(backresult)
  // for (let i = 0; i < nums.length; i++) {
  //     result.push(forresult[i] * backresult[i])
  // }

  // return result

  // bruteforce
  // let result = []
  // for (let i = 0; i < nums.length; i++) {
  //     let product = 1
  //     for (let j = 0; j < nums.length; j++) {
  //         if(i==j){
  //             continue
  //         }
  //         else{
  //             product = product * nums[j]
  //         }

  //     }
  //     result.push(product)
  // }
  // return result
};

let result = productExceptSelf([1, 2, 3, 4]);
console.log(result);
