const fs = require("fs");

let foo = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < foo[0].length - 3; i++) {
  a = foo[0].charAt(i);
  b = foo[0].charAt(i + 1);
  c = foo[0].charAt(i + 2);
  d = foo[0].charAt(i + 3);
  e = foo[0].charAt(i + 4);
  f = foo[0].charAt(i + 5);
  g = foo[0].charAt(i + 6);
  h = foo[0].charAt(i + 7);
  hh = foo[0].charAt(i + 8);
  j = foo[0].charAt(i + 9);
  k = foo[0].charAt(i + 10);
  l = foo[0].charAt(i + 11);
  m = foo[0].charAt(i + 12);
  n = foo[0].charAt(i + 13);

  listOfValues = [a, b, c, d, e, f, g, h, hh, j, k, l, m, n];

  if (listOfValues.length == new Set(listOfValues).size) {
    console.log(i + 14);
    break;
  }
}
