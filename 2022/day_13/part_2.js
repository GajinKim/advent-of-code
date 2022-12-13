const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let packetOne = [[2]];
let packetTwo = [[6]];
const packets = [
  packetOne,
  packetTwo,
  ...file.filter((p) => p !== "").map(eval),
];

packets.sort((a, b) => {
  return compare(a, b) == 1 ? -1 : 1;
});

function compare(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return 2;
    } else {
      return 3; // cycle once
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

const answer =
  (packets.indexOf(packetOne) + 1) * (packets.indexOf(packetTwo) + 1);
console.log(answer);
