function reverseWords(str) {
  let strArr = str.split(" ");

  let newArr = strArr.map((word) => {
    let wordArr = word.split("");

    let left = 0;
    let right = wordArr.length - 1;

    while (right >= left) {
      let temp = word[left];

      wordArr[left] = word[right];
      wordArr[right] = temp;

      left++;
      right--;
    }

    return wordArr.join("");
  });

  return newArr.join(" ");
}
