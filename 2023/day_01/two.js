const fs = require("fs");

let strings = fs.readFileSync("input.txt").toString().split("\n");
let numbers = [];

for (let i = 0; i < strings.length; i++) {
  curString = strings[i];

  firstNumber = []
  lastNumber = [];

  numbersAsStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  for (let i = 0; i < numbersAsStrings.length; i++) {
    if (curString.indexOf(numbersAsStrings[i]) != -1 && curString.indexOf(i + 1) != -1) {
      curString.indexOf(numbersAsStrings[i]) < curString.indexOf(i + 1) ? firstNumber.push(curString.indexOf(numbersAsStrings[i])) : firstNumber.push(curString.indexOf(numbersAsStrings[i]));
    } else if (curString.indexOf(numbersAsStrings[i]) != -1) {
      firstNumber.push(curString.indexOf(numbersAsStrings[i]));
    } else if (curString.indexOf(i + 1) != -1) {
      firstNumber.push(curString.indexOf(i + 1));
    } else {
      firstNumber.push(99);
    }
  }

  for (let i = 0; i < numbersAsStrings.length; i++) {
    if (curString.lastIndexOf(numbersAsStrings[i]) != -1 && curString.lastIndexOf(i + 1) != -1) {
      curString.lastIndexOf(numbersAsStrings[i]) > curString.lastIndexOf(i + 1) ? lastNumber.push(curString.lastIndexOf(numbersAsStrings[i])) : lastNumber.push(curString.lastIndexOf(numbersAsStrings[i]));
    } else if (curString.lastIndexOf(numbersAsStrings[i]) != -1) {
      lastNumber.push(curString.lastIndexOf(numbersAsStrings[i]));
    } else if (curString.lastIndexOf(i + 1) != -1) {
      lastNumber.push(curString.lastIndexOf(i + 1));
    } else {
      lastNumber.push(-99);
    }
  }

  firstNumberIndex = firstNumber.indexOf(Math.min.apply(null,firstNumber));
  console.log(firstNumberIndex)
  lastNumberIndex = lastNumber.indexOf(Math.max.apply(null,lastNumber));
  console.log(lastNumberIndex)


  numbers.push(parseInt(firstNumberIndex + "" + lastNumberIndex + ""));
}

console.log(numbers.reduce((a,b) => a + b, 0));