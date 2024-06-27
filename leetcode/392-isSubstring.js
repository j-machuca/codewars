/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // pointer to the last index of first string
  let left = 0;

  // pointer to the first

  // this is going to iterate n times where n is the max length of both arrays
  for (let i = 0; i < t.length; i++) {
    // a = a

    if (s[left] === t[i]) {
      left++;
    }
  }
  return s.length === left;
};

var isSubsequenceWhile = function (s, t) {
  let sI = 0;
  let tI = 0;

  while (tI < t.length) {
    if (s[sI] === t[tI]) {
      sI++;
    }
    tI++;
  }

  return s.length === sI;
};
