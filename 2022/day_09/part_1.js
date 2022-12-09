const fs = require("fs");

let motions = fs.readFileSync("motions.txt").toString().split("\n");
let visitedTailCoords = new Set();

// populate grid
head = [0, 0]; // row, col
tail = [0, 0]; // row, col

for (let m = 0; m < motions.length; m++) {
  direction = motions[m].charAt(0);
  steps = parseInt(motions[m].replace(/[^0-9]/g, ""));

  for (let s = 0; s < steps; s++) {
    if (direction == "R") {
      head[1] += 1;
    } else if (direction == "L") {
      head[1] -= 1;
    } else if (direction == "U") {
      head[0] += 1;
    } else if (direction == "D") {
      head[0] -= 1;
    }

    if (Math.abs(tail[0] - head[0]) <= 1 && Math.abs(tail[1] - head[1]) <= 1) {
      // do nothing
    } else {
      if (head[0] == tail[0]) {
        if (head[1] < tail[1]) {
          tail[1] -= 1;
        } else {
          tail[1] += 1;
        }
      } else if (head[1] == tail[1]) {
        if (head[0] < tail[0]) {
          tail[0] -= 1;
        } else {
          tail[0] += 1;
        }
      } else if (head[0] < tail[0] && head[1] < tail[1]) {
        tail[0] -= 1;
        tail[1] -= 1;
      } else if (head[0] > tail[0] && head[1] < tail[1]) {
        tail[0] += 1;
        tail[1] -= 1;
      } else if (head[0] < tail[0] && head[1] > tail[1]) {
        tail[0] -= 1;
        tail[1] += 1;
      } else if (head[0] > tail[0] && head[1] > tail[1]) {
        tail[0] += 1;
        tail[1] += 1;
      }

      visitedTailCoords.add(tail[0] + "," + tail[1]);
    }
  }
}
console.log("Tail positions: " + visitedTailCoords.size);
