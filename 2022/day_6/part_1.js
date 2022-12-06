const fs = require("fs");

let foo = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < foo[0].length - 3; i++) {
  first = foo[0].charAt(i);
  second = foo[0].charAt(i + 1);
  third = foo[0].charAt(i + 2);
  fourth = foo[0].charAt(i + 3);

  if (
    first != second &&
    first != second &&
    first != third &&
    first != fourth &&
    second != third &&
    second != fourth &&
    third != fourth
  ) {
    console.log(i+4);
    break;
  }
}
