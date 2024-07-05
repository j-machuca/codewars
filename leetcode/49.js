// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];

  const anagrams = new Map();
  const result = [];

  for (let w of strs) {
    // sort the letters in the words so that I can create unique anagrams easier

    let sorted_letters = [...w]
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    // if the anagram exists push it to the array for that key
    if (!anagrams.has(sorted_letters)) {
      // get the index of the group to put it in
      let idx = anagrams.size ? anagrams.size : 0;
      anagrams.set(sorted_letters, idx);
      result.push([w]);
    } else {
      let arrIdx = anagrams.get(sorted_letters);
      result[arrIdx].push(w);
    }
  }

  return result;
};
