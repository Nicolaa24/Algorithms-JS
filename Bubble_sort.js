const array = [
  1, 2, 5, 7, 4, 44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7, 1, 2, 5, 7, 4,
  44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7,
];

let countOperations = 0;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      countOperations += 1;
    }
  }
  return arr;
};

console.log(bubbleSort(array));
console.log("Кількість операцій:", countOperations);
