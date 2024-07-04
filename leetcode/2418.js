// 2418. Sort the People

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// Constraints:

//     n == names.length == heights.length
//     1 <= n <= 103
//     1 <= names[i].length <= 20
//     1 <= heights[i] <= 105
//     names[i] consists of lower and upper case English letters.
//     All the values of heights are distinct.

// 180,175,195,155,160

var sortPeople = function (names, heights) {
  // for every height value in the list

  // this is the entire array
  for (let i = 0; i < heights.length; i++) {
    // this is comparing the elements
    for (let j = 0; j < heights.length - i - 1; j++)
      if (heights[j] < heights[j + 1]) {
        [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
        [names[j], names[j + 1]] = [names[j + 1], names[j]];
      }
  }
  return names;
};
