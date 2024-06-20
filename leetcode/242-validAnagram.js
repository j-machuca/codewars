var isAnagram = function (s, t) {
  // if the length of the strings are different there is no way for it to be an anagram
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  // iterate over strings
  for (let i = 0; i < s.length; i++) {
    // push the character at index to the corresponding Map
    sMap.set(s[i], sMap.has(s[i]) ? sMap.get(s[i]) + 1 : 1);
    // if the character exists in the map update the count of that key
    tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1);
    //
  }
  // once done mapping

  // check for each key and the char count

  for (let [k, v] of sMap.entries()) {
    // return false if key is not present or count por the key is not equal
    if (!tMap.has(k) || tMap.get(k) !== v) return false;
  }

  // we've checked every key and both maps contain the same number of keys and the same count of characters

  return true;
};
