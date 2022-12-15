const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let map = new Map();
let covered = new Set();

for (let i = 0; i < file.length; i++) {
  line = file[i];
  sanitizedLine = line
    .replace("Sensor at ", "")
    .replace(/\r/, "")
    .split(": closest beacon is at ");

  sensor = sanitizedLine[0]
    .replace("x=", "")
    .replace(",", "")
    .replace("y=", "")
    .split(" ");
  beacon = sanitizedLine[1].replace("x=", "").replace("y=", "").split(" ");
  map.set(
    [parseInt(sensor[0]), parseInt(sensor[1])],
    [parseInt(beacon[0]), parseInt(beacon[1])]
  );
}

// Manhattan distance
let mx = 0;
let my = 0;
let md = 0;

// Calculate to four corners, and then fill in everything in between
for (const [key, value] of map.entries()) {
  mx = key[0] > value[0] ? key[0] - value[0] : value[0] - key[0];
  my = key[1] > value[1] ? key[1] - value[1] : value[1] - key[1];

  md = mx + my;

  width = 0;
  for (let i = key[1] - md; i <= key[1] + md; i++) {
    if (i != 2000000) {
      if (i < key[1]) {
        width++;
      } else {
        width--;
      }
      continue;
    }
    for (let j = key[0] - width; j <= key[0] + width; j++) {
      cur = [i, j].toString();
      if (!covered.has(cur) && i == 2000000) {
        covered.add(cur);
      }
    }
  }
}

console.log(covered.size - 1);

// -2,   7
// -1, 6 7 8
