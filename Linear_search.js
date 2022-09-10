const array = [1, 3, 2, 8, 8, 4, 5, 9, 7, 10];

let countOperations = 0;

const linearSearch = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    countOperations += 1;
    if (arr[i] === elem) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(array, 7));
console.log("Кількість операцій:", countOperations);
