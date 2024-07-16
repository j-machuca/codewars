// 1365. How Many Numbers Are Smaller Than the Current Number
// Easy
// Topics
// Companies
// Hint

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
  // Create a mapping of the value and its position

  let mappedArray = []; // array of [number,pos]

  for (let i = 0; i < nums.length; i++) {
    mappedArray.push([nums[i], i]);
  }
  // console.log(mappedArray);

  // sort the mapped array

  // My go at sorting =)
  // for (let i = 0; i < mappedArray.length; i++) {
  //   for (let j = i + 1; j < mappedArray.length; j++) {
  //     if (mappedArray[i][0] > mappedArray[j][0]) {
  //       [mappedArray[i], mappedArray[j]] = [mappedArray[j], mappedArray[i]];
  //     }
  //   }
  // }

  mappedArray.sort((a, b) => a[0] - b[0]);

  // console.log(mappedArray);

  // create a new map thats gonna store the position of the first occurrence of that value in the sorted array

  let numberMap = new Map();

  for (let i = 0; i < mappedArray.length; i++) {
    // console.log(mappedArray[i]);
    if (!numberMap.has(mappedArray[i][0])) {
      numberMap.set(mappedArray[i][0], i);
    }
  }

  // console.log(numberMap);

  // iterate over the original list of numbers and get its value from the map that is equivalent to its first occurence in the array

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(numberMap.get(nums[i]));
  }
  // console.log(result);
  return result;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
