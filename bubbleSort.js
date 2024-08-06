// create the array
let arr = [4, 3, 5, 2, 6, 7, 1];

// this is the outer loop
// for (let i = 0; i < arr.length; i++) {
//   // this is the inner loop
//   for (let j = 0; j < arr.length; j++) {
//     // we need to do the checking

//     let current = arr[j];
//     let nextVal = arr[j + 1];
//     console.log({ current, nextVal });
//     if (current > nextVal) {
//       // if condition is met we need to swap
//       let temp = current;
//       current = nextVal;
//       nextVal = temp;
//     }
//   }
// }

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
