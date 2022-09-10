const array = [
  1, 2, 5, 7, 4, 44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7, 1, 2, 5, 7, 4,
  44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7,
];

let countOperations = 0;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = j;
      }
      countOperations += 1;
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
};

console.log(selectionSort(array));
console.log("Кількість операцій:", countOperations);
