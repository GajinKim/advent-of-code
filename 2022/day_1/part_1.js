const fs = require("fs");

let calories = fs.readFileSync("list_of_calories.txt").toString().split("\n");
let largest = 0;
let current = 0;

for (let i = 0; i < calories.length; i++) {
  if (calories[i].length !== 1) {
    current += parseInt(calories[i]);

    if (i == calories.length - 1 && current > largest) {
      largest = current;
    }
  } else {
    if (current > largest) {
      largest = current;
    }
    current = 0;
  }
}

console.log(largest);
