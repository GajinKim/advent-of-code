const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");
let sum = 0;

for (let i = 0; i < file.length; i++) {
  line = file[i].replace(/\r/, "");
  sum += convertToDecimal(line);
}

function convertToDecimal(snafu) {
  let normalConverted = [];
  for (let i = snafu.length - 1; i >= 0; i--) {
    pos = snafu.length - i - 1;
    conversionFactor = Math.pow(5, pos);
    snafuDigit = 0;

    switch (snafu[i]) {
      case "2":
        snafuDigit = 2;
        break;
      case "1":
        snafuDigit = 1;
        break;
      case "0":
        snafuDigit = 0;
        break;
      case "-":
        snafuDigit = -1;
        break;
      case "=":
        snafuDigit = -2;
        break;
      default:
        break;
    }
    normalConverted.push(snafuDigit * conversionFactor);
  }
  return normalConverted.reduce((total, cur) => (total += cur), 0);
}

// converts base 10 to base 5
function convertToBaseFive(decimal) {
  let baseFiveConverted = [];

  while (decimal != 0) {
    baseFiveConverted.push(decimal % 5); // push the remainder
    decimal = parseInt(decimal / 5);
  }

  return baseFiveConverted.reverse();
}

function convertBaseFiveToSnafu(baseFive) {
  let snafuConverted = [];
  let carryOver = 0;

  for (let i = baseFive.length - 1; i >= 0; i--) {
    current = baseFive[i] + carryOver;

    if (current == 3) {
      snafuConverted.push("=");
      carryOver = 1;
    } else if (current == 4) {
      snafuConverted.push("-");
      carryOver = 1;
    } else if (current == 5) {
      snafuConverted.push(5);
      carryOver = 1;
    } else {
      snafuConverted.push(current);
      carryOver = 0;
    }
  }
  if (carryOver == 1) {
    snafuConverted.push(1);
  }

  return snafuConverted.reverse();
}

baseFive = convertToBaseFive(sum);
snafu = convertBaseFiveToSnafu(baseFive);

console.log(snafu.join(""));
