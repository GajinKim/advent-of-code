const fs = require("fs");

let motions = fs.readFileSync("motions.txt").toString().split("\n");
let visitedTailCoords = new Set();

// populate grid
snake = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
]; // row, col

for (let m = 0; m < motions.length; m++) {
  direction = motions[m].charAt(0);
  steps = parseInt(motions[m].replace(/[^0-9]/g, ""));

  for (let s = 0; s < steps; s++) {
    if (direction == "R") {
      snake[0][1] += 1;
    } else if (direction == "L") {
      snake[0][1] -= 1;
    } else if (direction == "U") {
      snake[0][0] += 1;
    } else if (direction == "D") {
      snake[0][0] -= 1;
    }

    for (let n = 0; n < snake.length - 1; n++) {
      if (
        Math.abs(snake[n][0] - snake[n + 1][0]) <= 1 &&
        Math.abs(snake[n][1] - snake[n + 1][1]) <= 1
      ) {
        // do nothing
      } else {
        if (snake[n][0] == snake[n + 1][0]) {
          if (snake[n][1] < snake[n + 1][1]) {
            snake[n + 1][1] -= 1;
          } else {
            snake[n + 1][1] += 1;
          }
        } else if (snake[n][1] == snake[n + 1][1]) {
          if (snake[n][0] < snake[n + 1][0]) {
            snake[n + 1][0] -= 1;
          } else {
            snake[n + 1][0] += 1;
          }
        } else if (
          snake[n][0] < snake[n + 1][0] &&
          snake[n][1] < snake[n + 1][1]
        ) {
          snake[n + 1][0] -= 1;
          snake[n + 1][1] -= 1;
        } else if (
          snake[n][0] > snake[n + 1][0] &&
          snake[n][1] < snake[n + 1][1]
        ) {
          snake[n + 1][0] += 1;
          snake[n + 1][1] -= 1;
        } else if (
          snake[n][0] < snake[n + 1][0] &&
          snake[n][1] > snake[n + 1][1]
        ) {
          snake[n + 1][0] -= 1;
          snake[n + 1][1] += 1;
        } else if (
          snake[n][0] > snake[n + 1][0] &&
          snake[n][1] > snake[n + 1][1]
        ) {
          snake[n + 1][0] += 1;
          snake[n + 1][1] += 1;
        }

        visitedTailCoords.add(snake[9][0] + "," + snake[9][1]);
      }
    }
  }
}
console.log("snake tail positions: " + visitedTailCoords.size);
