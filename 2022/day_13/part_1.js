const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let rightOrderCount = [];
let index = 0;

for (let i = 0; i < file.length; i += 3) {
  index++;
  first = eval(file[i]);
  second = eval(file[i + 1]);

  if (compare(first, second) == 1) {
    rightOrderCount.push(index);
  }
}

function compare(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return 2;
    } else {
      return 3;
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < a.length && i < b.length; i++) {
      let comp = compare(a[i], b[i]);
      if (comp != 3) {
        return comp;
      }
    }
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return 2;
    }
    return 3;
  } else {
    return compare(
      Number.isInteger(a) ? [a] : a,
      Number.isInteger(b) ? [b] : b
    );
  }
}

const answer = rightOrderCount.reduce((total, curVal) => {
  return (total += curVal);
});

console.log(answer);
