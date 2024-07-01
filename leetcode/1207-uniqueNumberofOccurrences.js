/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // use a map to store the values and occurrences
  let nmap = new Map();
  // use a set to see if we've seen that occurrence
  let oSet = new Set();
  // iterate over the map to populate
  for (let num of arr) {
    let count = nmap.has(num) ? nmap.get(num) + 1 : 1;
    nmap.set(num, count);
  }

  // iterate over the v in the map and check if value is in set
  for (let v of nmap.values()) {
    if (oSet.has(v)) {
      return false;
    } else {
      oSet.add(v);
    }
  }

  return true;
};
