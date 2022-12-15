const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let map = new Map();

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

let max = 4000000;

for (let cx = 0; cx <= max; cx++) {
  let ranges = [];

  for (const [key, value] of map.entries()) {
    mx = key[0] > value[0] ? key[0] - value[0] : value[0] - key[0];
    my = key[1] > value[1] ? key[1] - value[1] : value[1] - key[1];
    r = mx + my;
    d = Math.abs(key[1] - cx);

    if (d <= r) {
      let minX = Math.max(0, key[0] - (r - d));
      let maxX = Math.min(max, key[0] + (r - d));

      if (ranges.length == 0) {
        ranges.push([minX, maxX]);
      } else {
        let currentRange = [minX, maxX];
        for (let i = ranges.length - 1; i >= 0; i--) {
          if (
            currentRange[0] <= ranges[i][1] &&
            ranges[i][0] <= currentRange[1]
          ) {
            currentRange[0] = Math.min(currentRange[0], ranges[i][0]);
            currentRange[1] = Math.max(currentRange[1], ranges[i][1]);
            ranges.splice(i, 1);
          }
        }
        ranges.push(currentRange);
      }
    }
  }
  if (!(ranges[0][0] == 0 && ranges[0][1] == max)) {
    row =
      Math.abs(ranges[0][1] - ranges[1][0]) == 2
        ? Math.min(ranges[0][1], ranges[1][0]) + 1
        : Math.min(ranges[0][0], ranges[1][1]) + 1;

    console.log(row, cx);
    console.log(row * 4000000 + cx);
    break;
  }
}
