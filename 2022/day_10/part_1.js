const fs = require("fs");

let instructions = fs.readFileSync("input.txt").toString().split("\n");
let x = 1;
let cycle = 0;

// reducer
// parameter 1: a function with two inputs ("thing we're accumulating", "each input")
// parameter 2: starting value for the "thing we're accumulating"

// everytime we iterate through our reducer
// we get our previous return value (accuracy)
// and we move through our instructions, next (line)

// basically the big idea is with reduce: whatever reduce returns is going to be the
// total (accuracy) for the next iteration through
const totalAccuracy = instructions.reduce((accuracy, line) => {
  // if noop, instruction & number are undefined
  // if addx V, instruction == addx & number = V;
  let [instruction, number] = line.split(" ");

  // regardless of whether it's a noop or addx instruction, increment the cycle
  cycle++;

  if (cycle % 40 == 20) {
    accuracy += cycle * x;
  }

  if (instruction == "addx") {
    // if we have an addx, we iterate our cycle a second time
    cycle++;

    if (cycle % 40 == 20) {
      accuracy += cycle * x;
    }

    x += parseInt(number);
  }
  return accuracy;
}, 0);

console.log(totalAccuracy);
