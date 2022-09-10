Агоритм - це набір послідовних дій які вирішують будь-яку задачу.
**Складність або швидкість алгоритму описують за допомоги нотації О велике (n) - кількість операцій за які алгоритм приходить до фінального результату. Оцінка відбувається по найгіршому результату.**

1. Лінійний пошук -
   **Нам потрібно знайти елемент масиву під номером 7, ми починаємо з першого елементу і послідовно йдемо по масиву поки не знайдете заданий елемент. В кращому випадку ми знайдемо заданий елемент за одну операцію в гіршому в самому кінці списку. В даному випадку О(n10) якщо масим буде зі 100 елементів тоді О(n100) працює за лінійний час**

```
const array = [1, 3, 2, 8, 8, 4, 5, 9, 7, 10];

const linearSearch = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    countOperations += 1;
    if (arr[i] === elem) {
      return i;
    }
  }
  return null;
};
console.log(linearSearch(array, 7));//8
console.log("Кількість операцій:", countOperations);//9
```

2. Швидке сортування (Сортування Хора)
   **Суть цього алгоритму полягає в діленні масиму на підмасиви і кожного разу ми вибираємо опірний елемент в підмасиву(як правильно це центральний елемент) і всі елементи які більше ніж опірний елемент добавляємо в один масив, а всі які менші в інший масив. Після чього в ми получаємо два масима з меншими числами та з більшими і для кожного з цих масимів виконується така сама операція і так робиться поки довжина масиму не стане рівна 1.
   Швидкість алгоритму буде O(log2n\*n).**

```
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
console.log("Кількість операцій:", countOperations);// 215
```

3. Бінарний пошук
   **Цей алгоритм в рази швидший за лінійний пошук але він підрозуміває, що масив вже посортований попорядку. Наприклад ми граємо гру вгадай цисло від 1 до 100. Не потрібно перечисляти числа попорядку. Ми знаємо що всі числа йдуть попорядку) і ми можемо почату пошук з середини, наприклад 50 якщо пошукове число більше ніж 50 тоді ми відсіюємо числа які менші 50, в нас залишається числа від 50 до 100. Ділимо на 2 получаємо число 75, пошукове число вже менше . Тоді нам не потрібні числа які більші за 75 і так далі.
   Швидкість алгоритму буде O(log2n) працює за алгометричний час.**

**Рішення за допомогою рекурсії**

```
const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

let countOperations = 0;

const binarySearch = (arr, elem, start, end) => {
  let midleElement = Math.floor((start + end) / 2);
  countOperations += 1;
  if (elem === arr[midleElement]) return midleElement;
  return elem < arr[midleElement]
    ? binarySearch(arr, elem, start, midleElement - 1)
    : binarySearch(arr, elem, midleElement + 1, end);
};

console.log(binarySearch(array, 12, 0, array.length));
console.log("Кількість операцій:", countOperations); // 4
```

**Рішення за допомогою цикла без рекурсії**

```
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
console.log("Кількість операцій:", countOperations); // 12
```

4. Бульбашкове сортування
   **Цей алгоритм один з самих малоефективних пошукових алгоритмів. Принцип роботи полягає в в переборів масив в подвійному циклі і порівнюємо попарно лежачі елементи, якщо наступний елемент масиму менший ніж наступний ми міняємо їх місцями (спливання) найбільший елемент з кожною ітерацією піднімається на гору.
   Швидкість алгоритму буде O(n2) працює за алгометричний час.
   1444 операції! різниця очевидна, швидке сортування сортує цей масив за 215 операцій.**

```
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
```

5. Вибіркове сортування
   ** В даному випадку в нас масив неупорядкованих елементів, де нам потрібно знайти мінімальний елемент і після чого поміняти його з першим елементом масиву. Потім ми знов проходимось по масиму і шукаємо мінімальне значення але міняємо його вже з другим елементом
   Швидкість алгоритму буде O(n2) працює за алгометричний час.**

```
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
```
