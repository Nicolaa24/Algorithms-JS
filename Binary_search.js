const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

let countOperations = 0;

//Recursive method

// const binarySearch = (arr, elem, start, end) => {
//   let midleElement = Math.floor((start + end) / 2);
//   countOperations += 1;
//   if (elem === arr[midleElement]) return midleElement;
//   return elem < arr[midleElement]
//     ? binarySearch(arr, elem, start, midleElement - 1)
//     : binarySearch(arr, elem, midleElement + 1, end);
// };

// console.log(binarySearch(array, 12, 0, array.length));
// console.log("Кількість операцій:", countOperations);

//cyclic method

const cyclicBinarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length;
  let midleElement;
  let founded = false;
  let position = -1;

  while (founded === false && start <= end) {
    countOperations += 1;
    midleElement = Math.floor((start + end) / 2);

    if (arr[midleElement] === elem) {
      founded = true;
      position = midleElement;
      return position;
    }

    elem < array[midleElement]
      ? (end = midleElement - 1)
      : (start = midleElement + 1);
  }
  return position;
};

console.log(cyclicBinarySearch(array, 12));
console.log("Кількість операцій:", countOperations);
