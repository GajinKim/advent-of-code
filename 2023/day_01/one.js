const fs = require("fs");

let strings = fs.readFileSync("input.txt").toString().split("\n");
let numbers = [];

for (let i = 0; i < strings.length; i++) {
  firstString = false
  curString = strings[i];
  firstNumber = "";
  secondNumber = "";

  index1 = curString.indexOf("one");
  index2 = curString.indexOf("two");
  index3 = curString.indexOf("three");
  index4 = curString.indexOf("four");
  index5 = curString.indexOf("five");
  index6 = curString.indexOf("six");
  index7 = curString.indexOf("seven");
  index8 = curString.indexOf("eight");
  index9 = curString.indexOf("nine");

  console.log(curString);

  for (let j = 0; j < curString.length; j++) {
    if (curString[j] >= '0' && curString[j] <= '9') {
      if (firstNumber.length == 0) {
        firstNumber = curString[j];
        secondNumber = curString[j];
      } else {
        secondNumber = curString[j];
      }
    }
  }

  numbers.push(parseInt(firstNumber + secondNumber));
}

console.log(numbers)
console.log(numbers.reduce((a,b) => a + b, 0));