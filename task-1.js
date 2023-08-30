// # Задача 1

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять певне слово.

const arr = ["Hello World", "Goodbye", "JavaScript", "World of Warcraft"];

function containWord(arr, wordToFind, callback) {
  const filteredarr = arr.filter((word) => word.includes(wordToFind));
  callback(filteredarr, wordToFind);
}

function callbackFn(result, word) {
  console.log(`${result} contain ${word}`);
}

containWord(arr, "World", callbackFn);
