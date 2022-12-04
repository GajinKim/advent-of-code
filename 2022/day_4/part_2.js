const fs = require("fs");

let ranges = fs.readFileSync("input.txt").toString().split("\n");
let pairs = 0;

for (let i = 0; i < ranges.length; i++) {
  both = ranges[i].split(",");
  left = both[0].split("-");
  right = both[1].split("-");

  left[0] = parseInt(left[0]);
  left[1] = parseInt(left[1]);
  right[0] = parseInt(right[0]);
  right[1] = parseInt(right[1]);

  console.log(left, right);
  if (
    left[0] >= right[0] &&
    left[0] <= right[1] &&
    left[1] >= right[0] &&
    left[1] <= right[1]
  ) {
    pairs++;
  } else if (
    right[0] >= left[0] &&
    right[0] <= left[1] &&
    right[1] >= left[0] &&
    right[1] <= left[1]
  ) {
    pairs++;
  } else if (
    (left[0] >= right[0] && left[0] <= right[1]) ||
    (left[1] >= right[0] && left[1] <= right[1])
  ) {
    pairs++;
  }
}

console.log(pairs);
