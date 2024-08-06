// 1636. Sort Array by Increasing Frequency

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

// Constraints:

//     1 <= nums.length <= 100
//     -100 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let bucketSort = (numMap, length) => {
//   //  0   1  2  3    4  5   6
//   // [undefined,undefined,undefined,undefined,undefined,undefined]

//   // { 1 => 2, 2 => 3, 3 => 1 }

//   // create a bucket with enough spaces to hold the numbers for that occurrence
//   let sortedBucket = Array(length + 1);

//   // iterate over the numMap and get the key=number and the v=freq
//   for (let [number, frequency] of numMap.entries()) {
//     // if the bucket for v freq is empty
//     if (sortedBucket[frequency] === undefined) {
//       // create an array that hold this number (making an array cause there can be multiple numbers with the same occurrence)
//       sortedBucket[frequency] = [number];
//     } else {
//       // there is an existing number with the same frequency
//       // sort by decreasing order for same frequency
//       sortedBucket[frequency] = [...sortedBucket[frequency], number].sort(
//         (a, b) => b - a
//       );
//     }
//   }
//   return sortedBucket;
// };

// var frequencySort = function (nums) {
//   // create a map to store the count of each number
//   let numMap = new Map();

//   let numsSet = new Set(nums);

//   if (numsSet.size === 1) {
//     return nums;
//   }

//   // for every number in the nums array
//   for (let num of nums) {
//     // set the key to either the increment of existing value or 1 if the value doesn't exist
//     numMap.set(num, numMap.get(num) + 1 || 1);
//   }

//   let bucket = bucketSort(numMap, nums.length);

//   let result = [];

//   // access each bucket
//   for (let i = 0; i < nums.length; i++) {
//     // for every item in the bucket
//     if (bucket[i] !== undefined) {
//       // repeat push to result i amount of times
//       bucket[i].map((num) => {
//         for (let r = 0; r < i; r++) {
//           result.push(num);
//         }
//       });
//     }
//   }
//   return result;
// };

// frequencySort([1, 1, 2, 2, 2, 3]);
// frequencySort([2, 3, 1, 3, 2]);
// frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]); // [5,-1,4,4,-6,-6,1,1,1]

// [1, 1, 2, 2, 2, 3];

var frequencySort = function (nums) {
  let freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freq.get(nums[i])) {
      freq.set(nums[i], freq.get(nums[i]) + 1);
    } else {
      freq.set(nums[i], 1);
    }
  }
  return nums.sort((a, b) => {
    let frequencyA = freq.get(a);
    let frequencyB = freq.get(b);

    //sort    asc                        desc
    return freq.get(a) - freq.get(b) || b - a;
  });
};
