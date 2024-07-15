// 3005. Count Elements With Maximum Frequency
// Easy
// Topics
// Companies
// Hint

// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.

// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  // create a map that will hold the ocurrences of each value

  let numCount = new Map();

  // iterate over the nums array to populate the map
  for (let i = 0; i < nums.length; i++) {
    if (numCount.has(nums[i])) {
      numCount.set(nums[i], numCount.get(nums[i]) + 1);
    } else {
      numCount.set(nums[i], 1);
    }
  }

  let bucket = new Array(nums.length + 1).fill(Array(0));

  for (let [num, occ] of numCount.entries()) {
    if (bucket[occ]) {
      bucket[occ] = [...bucket[occ], num];
    } else {
      bucket[occ] = [num];
    }
  }

  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i].length > 0) {
      return bucket[i].length * i;
    }
  }
};

//  other solution not using a bucket - found in the solutions tab
// trying to figure out the logic

var maxFrequencyElements = function (nums) {
  // created a map to hold the frequencies
  let freq = {};
  // adding a variable to store the maximum frequency
  let maxFrequency = 0;
  // adding a counter of the total amount for that frequency
  let totalFrequencies = 0;

  // iterate over each number in the array
  for (let num of nums) {
    // set the frequency of that number to 0 if not present and add one.
    freq[num] = (freq[num] || 0) + 1;
    // if the maxFrequency at this moment is equal to the frequency of this number add it to the counter of numbers with the same freq.
    if (maxFrequency === freq[num]) totalFrequencies++;
    // if the frequency of the number is greater than the maxFrequency known till this point
    else if (maxFrequency < freq[num]) {
      // set the new max frequency to the frequency of this number
      maxFrequency = freq[num];

      // reset the counter of frequencies for this new max value to one
      totalFrequencies = 1;
    }
  }

  // return the maximum frequency times the total numbers that occurred n many times
  return maxFrequency * totalFrequencies;
};
