// this is the main function
// this is the function that is going to be called recursively
function mergeSort(arr, order = "asc") {
  // define the base case
  // if there is nothing else to split
  if (arr.length === 1) {
    return arr;
  }

  // do something with the array we got
  // splitting the array in 2
  // need to grab a mid point
  let mid = Math.floor(arr.length / 2);
  // based on the mid point we need to create the left part of the array
  let leftArr = arr.slice(0, mid);
  // based on the mid point we need to create the right part of the array
  let rightArr = arr.slice(mid);

  // we need to merge the arrays together and return it this is where we use our utility function

  // return order == "asc"
  //   ? merge(mergeSort(leftArr), mergeSort(rightArr), order)
  //   : merge(mergeSort(rightArr), mergeSort(leftArr), order);

  return merge(mergeSort(leftArr, order), mergeSort(rightArr, order), order);
}

// merge function without any changes - THE OG

// function mergeAsc(leftArr, rightArr) {
//   let tempArr = [];
//   // create a variable to store leftPointer initially 0
//   let leftPointer = 0;
//   // create a variable to store leftPointer initially 0
//   let rightPointer = 0;

//   while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
//     // if leftArr[leftPointer] <= rightArr[rightPointer]{
//     if (leftArr[leftPointer] <= rightArr[rightPointer]) {
//       // push the leftArr[leftPointer] to our temp array
//       tempArr.push(leftArr[leftPointer]);
//       // shift the leftPointer 1 slot
//       leftPointer++;
//     } else {
//       // push the rightArr[rightPointer] to our temp array
//       tempArr.push(rightArr[rightPointer]);
//       // shift the rightPointer 1 slot
//       rightPointer++;
//     }
//   }
//   //  check if the left array is empty
//   if (leftPointer < leftArr.length) {
//     // if so push whatever is left in it
//     tempArr = [...tempArr, ...leftArr.slice(leftPointer)];
//   }
//   // check if the right array is empty
//   if (rightPointer < rightArr.length) {
//     // if so push whaterver is left in it
//     tempArr = [...tempArr, ...rightArr.slice(rightPointer)];
//   }
//   return tempArr;
// }

// function mergeDes(leftArr, rightArr) {
//   let tempArr = [];
//   // create a variable to store leftPointer initially 0
//   let leftPointer = 0;
//   // create a variable to store leftPointer initially 0
//   let rightPointer = 0;

//   while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
//     // if leftArr[leftPointer] <= rightArr[rightPointer]{
//     if (leftArr[leftPointer] <= rightArr[rightPointer]) {
//       // push the leftArr[leftPointer] to our temp array
//       tempArr.push(leftArr[leftPointer]);
//       // shift the leftPointer 1 slot
//       leftPointer++;
//     } else {
//       // push the rightArr[rightPointer] to our temp array
//       tempArr.push(rightArr[rightPointer]);
//       // shift the rightPointer 1 slot
//       rightPointer++;
//     }
//   }
//   //  check if the left array is empty
//   if (leftPointer < leftArr.length) {
//     // if so push whatever is left in it
//     tempArr = [...tempArr, ...leftArr.slice(leftPointer)];
//   }
//   // check if the right array is empty
//   if (rightPointer < rightArr.length) {
//     // if so push whaterver is left in it
//     tempArr = [...tempArr, ...rightArr.slice(rightPointer)];
//   }
//   return tempArr;
// }

// utility function

// let arr = [1, 4, 3, 2, 5];

function merge(leftArr, rightArr, order) {
  // create a temporary array that should be the one containing the sorted numbers initially its empty

  let tempArr = [];
  // create a variable to store leftPointer initially 0
  let leftPointer = 0;
  // create a variable to store leftPointer initially 0
  let rightPointer = 0;

  if (order === "asc") {
    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
      // if leftArr[leftPointer] <= rightArr[rightPointer]{
      if (leftArr[leftPointer] <= rightArr[rightPointer]) {
        // push the leftArr[leftPointer] to our temp array
        tempArr.push(leftArr[leftPointer]);
        // shift the leftPointer 1 slot
        leftPointer++;
      } else {
        // push the rightArr[rightPointer] to our temp array
        tempArr.push(rightArr[rightPointer]);
        // shift the rightPointer 1 slot
        rightPointer++;
      }
    }
    //  check if the left array is empty
    if (leftPointer < leftArr.length) {
      // if so push whatever is left in it
      tempArr = [...tempArr, ...leftArr.slice(leftPointer)];
    }
    // check if the right array is empty
    if (rightPointer < rightArr.length) {
      // if so push whaterver is left in it
      tempArr = [...tempArr, ...rightArr.slice(rightPointer)];
    }

    // return our temporary array
    return tempArr;
  } else {
    // descending
    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
      // if leftArr[leftPointer] >= rightArr[rightPointer]{
      if (leftArr[leftPointer] >= rightArr[rightPointer]) {
        // push the leftArr[leftPointer] to our temp array
        tempArr.push(leftArr[leftPointer]);
        // shift the leftPointer 1 slot
        leftPointer++;
      } else {
        // push the rightArr[rightPointer] to our temp array
        tempArr.push(rightArr[rightPointer]);
        // shift the rightPointer 1 slot
        rightPointer++;
      }
    }
    //  check if the left array is empty
    if (leftPointer < leftArr.length) {
      // if so push whatever is left in it
      tempArr = [...tempArr, ...leftArr.slice(leftPointer)];
    }
    // check if the right array is empty
    if (rightPointer < rightArr.length) {
      // if so push whaterver is left in it
      tempArr = [...tempArr, ...rightArr.slice(rightPointer)];
    }
    return tempArr;
  }
}
// this is the descending version

let arr = [
  23, 89, 12, 55, 38, 67, 42, 91, 8, 74, 3, 27, 48, 16, 99, 14, 62, 77, 31, 6,
  80, 25, 49, 18, 70, 5, 84, 11, 33, 90, 22, 73, 19, 64, 50, 87, 30, 47, 13, 97,
  28, 41, 60, 9, 71, 34, 53, 79, 20, 4,
];

// let arr = [1, 4, 3, 2, 5];

console.log(mergeSort(arr));
console.log(mergeSort(arr, "des"));
