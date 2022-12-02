const fs = require("fs");

let calories = fs.readFileSync("list_of_calories.txt").toString().split("\n");
let largest = 0;
let secondLargest = 0;
let thirdLargest = 0;
let current = 0;

for (let i = 0; i < calories.length; i++) {
  if (calories[i].length !== 1) {
    current += parseInt(calories[i]);

    if (i == calories.length - 1) {
      if (current > largest) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = current;
      } else if (current > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = current;
      } else if (current > thirdLargest) {
        thirdLargest = current;
      }
    }
  } else {
    if (current > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = current;
    } else if (current > thirdLargest) {
      thirdLargest = current;
    }
    current = 0;
  }
}

console.log(largest+secondLargest+thirdLargest);
