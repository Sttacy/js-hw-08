// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять вказаний символ.

const arr4 = ["hello", "world", "javascript", "callback"];
const char = "a";

function filterStrings(arr, char, callbackFunction) {
  const filteredStrings = arr.filter((word) => word.includes(char));
  callbackFunction(filteredStrings, char);
}
function callbackFunction(strings, char) {
  console.log(`${strings} contain the letter ${char}`);
}

filterStrings(arr4, char, callbackFunction);
