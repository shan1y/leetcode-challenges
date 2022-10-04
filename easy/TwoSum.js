// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const TwoSum = (array, integer) => {
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] + array[j] === integer) {
        index1 = i;
        index2 = j;
        return [index1, index2];
      } else {
        null;
      }
    }
  }
  return "no solution";
};

console.log(TwoSum([3, 2, 4], 6));
