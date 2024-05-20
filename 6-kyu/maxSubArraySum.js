/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


*/

// Solution Kadane's Algorithm

var maxSequence = function (arr) {
  // Check if array is empty and return 0

  if (arr.length === 0) return 0;

  // Check if array has only one and is not negative
  if (arr.length === 1 && arr[0] < 0) return 0;

  // initialize largest to 0
  let largest = 0;

  let currSum = 0;

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    // add to current sum
    currSum += arr[i];

    // if current sum is less than current iteration update current sum
    if (currSum < arr[i]) {
      currSum = arr[i];
    }
    // if current sum is greater than the largest update to newes largest sum
    if (currSum > largest) {
      largest = currSum;
    }
  }

  return largest;
};

// Another Variation

// var maxSequence = function (arr) {
//   Initialize the variables
//   var min = 0,
//     ans = 0,
//     sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//      check for current iteration sum
//     sum += arr[i];
//      set new min to the newest biggest sum
//     min = Math.min(sum, min);
//      set ans to the newest greatest value
//     ans = Math.max(ans, sum - min);
//   }
//    return ans
// };
