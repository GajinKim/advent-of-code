const fs = require("fs");

let round = fs.readFileSync("input.txt").toString().split("\n");
let score = 0;

const pointMap = new Map();
pointMap.set("AY", 4); // draw to rock
pointMap.set("AX", 3); // loss vs rock (scissors)
pointMap.set("AZ", 8); // win vs rock (paper)
pointMap.set("BY", 5); // draw to paper
pointMap.set("BX", 1); // loss vs paper (rock)
pointMap.set("BZ", 9); // win vs paper (scissors)
pointMap.set("CY", 6); // draw to scissors
pointMap.set("CX", 2); // loss vs scissors (paper)
pointMap.set("CZ", 7); // win vs scissors (rock)

for (let i = 0; i < round.length; i++) {
  let left = round[i].slice(0, 1);
  let right = round[i].slice(2, 3);

  if (right === "Y") {
    if (left === "A") {
      score += pointMap.get("AY");
    } else if (left === "B") {
      score += pointMap.get("BY");
    } else {
      score += pointMap.get("CY");
    }
  } else if (right === "X") {
    if (left === "A") {
      score += pointMap.get("AX");
    } else if (left === "B") {
      score += pointMap.get("BX");
    } else {
      score += pointMap.get("CX");
    }
  } else {
    if (left === "A") {
      score += pointMap.get("AZ");
    } else if (left === "B") {
      score += pointMap.get("BZ");
    } else {
      score += pointMap.get("CZ");
    }
  }
}

console.log(score);
