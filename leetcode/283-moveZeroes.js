// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

/*
@param {number[]} nums
@param {void} Do not return anything
*/

var moveZeroes = function (nums) {
  // need a pointer to store the last current number
  let left = 0;

  // iterate the array
  for (let right = 0; right < nums.length; right++) {
    // if the number is not equal to zero
    if (nums[right] !== 0) {
      // swap the element
      [nums[left], nums[right]] = [nums[right], nums[left]];
      // increment the pointer
      left++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 3, 0, 1, 12]));
