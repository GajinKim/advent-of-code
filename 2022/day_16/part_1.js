const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let pr = 0; // pressure released currently (minute)

let vfr = new Map(); // valve flowrate
let vvc = new Map(); // valve to valve connections

for (let i = 0; i < file.length; i++) {
  line = file[i].replace(/\r/, "").split(" ");
  vfr.set(line[1], parseInt(line[4].replace(/\D/g, "")));
  vvc.set(
    line[1],
    line.slice(9).map((x) => x.replace(",", ""))
  );
}

console.log(vfr);
console.log(vvc);

function maxFlow(cur, opened, minLeft) {
  best = 0;
  if (!opened.has(cur)) {

  }
  vvc.get(cur).forEach((element) => {
    // open current node
    // move to another node

  });
}

maxFlow("AA", 30);
