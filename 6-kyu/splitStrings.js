/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Example:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
  let charPair = [];

  for (let i = 0; i < str.length; i += 2) {
    charPair.push(`${str[i]}${i + 1 < str.length ? str[i + 1] : "_"}`);
  }
  return charPair;
}
