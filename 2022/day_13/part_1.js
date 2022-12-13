const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let rightOrderCount = [];
let index = 0;

for (let i = 0; i < file.length; i += 3) {
  index++;
  first = eval(file[i]);
  second = eval(file[i + 1]);

  if (compare(first, second)) {
    rightOrderCount.push(index);
  }
}

function compare(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
      return true;
    } else if (a > b) {
      return false;
    } else {
      return undefined; // cycle once
    }
  } else if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < a.length && i < b.length; i++) {
      let comp = compare(a[i], b[i]);
      if (comp != undefined) {
        return comp;
      }
    }
    if (a.length < b.length) {
      return true;
    } else if (a.length > b.length) {
      return false;
    }
    return undefined;
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
