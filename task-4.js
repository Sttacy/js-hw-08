// Необхідно створити функцію, яка приймає масив імен та callback-функцію. Функція
// повинна викликати callback-функцію з іменем, яке містить найбільшу кількість
// літер.

const names = ["Андрій", "Олександр", "Максим", "Юлія", "Наталія"];

function getLongestName(names, callbackFunction) {
  let longestName = "";
  names.forEach( item => {
    if (item.length > longestName.length) {
      longestName = item;
    }
  });
  callbackFunction(longestName);
}

function callback(longestWord) {
  console.log(`${longestWord} is longest word`);
}

getLongestName(names, callback);
