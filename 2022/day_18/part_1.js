const fs = require("fs");
let file = fs.readFileSync("input.txt").toString().split("\n");

const cubes = new Set();
const cubesString = new Set();

for (let i = 0; i < file.length; i++) {
  [x, y, z] = file[i].replace(/\r/, "").split(",");
  cubes.add([parseInt(x), parseInt(y), parseInt(z)]);
  cubesString.add([x, y, z].toString());
}

function part1() {
  let surfaceArea = 0;

  for (const [x, y, z] of cubes) {
    let neighbors = [
      [x - 1, y, z].toString(),
      [x + 1, y, z].toString(),
      [x, y - 1, z].toString(),
      [x, y + 1, z].toString(),
      [x, y, z - 1].toString(),
      [x, y, z + 1].toString(),
    ];

    for (const neighbor of neighbors) {
      surfaceArea += !cubesString.has(neighbor) ? 1 : 0;
    }
  }
  return surfaceArea;
}

console.log(part1());