/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let charCount = {};

  let strArr = string.split("");

  if (strArr.length > 0) {
    strArr.forEach((el) => {
      if (charCount.hasOwnProperty(el)) {
        charCount[el]++;
      } else {
        charCount[el] = 1;
      }
    });
  }

  return charCount;
}
