// Необхідно створити функцію, яка приймає масив чисел та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті числа, які
// є парними.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(arr, callbackFunction) {
  const filteredArr = arr.filter((number) => number % 2 == 0);
  callbackFunction(filteredArr);
}

function callback(numbers) {
  console.log(`${numbers} are even numbers`);
}

filterNumbers(arr, callback);
