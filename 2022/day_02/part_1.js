const fs = require("fs");

let round = fs.readFileSync("input.txt").toString().split("\n");
let score = 0;

const rpsMap = new Map();
rpsMap.set("A", "Rock");
rpsMap.set("X", "Rock");
rpsMap.set("B", "Paper");
rpsMap.set("Y", "Paper");
rpsMap.set("C", "Scissors");
rpsMap.set("Z", "Scissors");

for (let i = 0; i < round.length; i++) {
  let left = rpsMap.get(round[i].slice(0, 1));
  let right = rpsMap.get(round[i].slice(2, 3));

  if (left === right) {
    if (left === "Rock") {
      score += 4;
    } else if (left === "Paper") {
      score += 5;
    } else {
      score += 6;
    }
  } else if (
    (left === "Rock" && right === "Paper") ||
    (left === "Paper" && right === "Scissors") ||
    (left === "Scissors" && right === "Rock")
  ) {
    if (right === "Paper") {
      score += 8;
    } else if (right === "Scissors") {
      score += 9;
    } else {
      score += 7;
    }
  } else {
    if (right === "Paper") {
      score += 2;
    } else if (right === "Scissors") {
      score += 3;
    } else {
      score += 1;
    }
  }
}

console.log(score);
