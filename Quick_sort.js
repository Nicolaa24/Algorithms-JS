const array = [
  1, 2, 5, 7, 4, 44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7, 1, 2, 5, 7, 4,
  44, 3, 10, 1, 2, 2, 8, 9, -5, 20, -3, 25, 33, 7,
];

let countOperations = 0;

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    countOperations += 1;
    if (i === pivotIndex) continue;
    arr[i] < pivot ? less.push(arr[i]) : greater.push(arr[i]);
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(array));
console.log("Кількість операцій:", countOperations);
