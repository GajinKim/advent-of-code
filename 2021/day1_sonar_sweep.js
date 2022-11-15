const fs = require('fs');

let listOfSweeps = fs.readFileSync('day1_sonar_sweep_input.txt').toString().split("\n");
let increased = 0;

for (let i = 0; i < listOfSweeps.length - 1; i++) {
  if (parseInt(listOfSweeps[i]) < parseInt(listOfSweeps[i+1])) {
    increased++;
  }
}

console.log(increased);