const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");
let fy = 0;
let sandCount = 1;
let sandPos = [500, 0];

let grid = new Set();

for (let i = 0; i < file.length; i++) {
  let line = file[i].replace(/\r/, "").split(" -> ");

  for (let j = 0; j < line.length - 1; j++) {
    [x, y] = line[j].split(",");
    [nx, ny] = line[j + 1].split(",");

    let xDelta = Math.abs(nx - x);
    let yDelta = Math.abs(ny - y);

    if (xDelta == 0) {
      xx = parseInt(x);
      for (let k = Math.min(ny, y); k <= Math.max(ny, y); k++) {
        yy = parseInt(k);
        grid.add([xx, yy].toString());

        fy = yy > fy ? yy : fy;
      }
    } else if (yDelta == 0) {
      yy = parseInt(y);
      for (let n = Math.min(nx, x); n <= Math.max(nx, x); n++) {
        xx = parseInt(n);
        grid.add([xx, yy].toString());
      }
    }

    fy = y > fy ? y : fy;
  }
}

while (true) {
  let d = [sandPos[0], sandPos[1] + 1];
  let dl = [sandPos[0] - 1, sandPos[1] + 1];
  let dr = [sandPos[0] + 1, sandPos[1] + 1];

  // into the abyss
  if (sandPos[1] > fy) {
    console.log("into the abyss", sandCount - 1);
    break;
  }

  // blocked
  let dBlocked = grid.has(d.toString());
  let dlBlocked = grid.has(dl.toString());
  let drBlocked = grid.has(dr.toString());

  if (dBlocked && dlBlocked && drBlocked) {
    console.log('sand settled at point:', sandPos, grid.size);
    grid.add(sandPos.toString());
    sandPos = [500, 0];
    sandCount++;
  }
  // directly beneath
  else if (!dBlocked) {
    sandPos = [...d];
  }
  // bottom left
  else if (!dlBlocked) {
    sandPos = [...dl];
  }
  // bottom right
  else if (!drBlocked) {
    sandPos = [...dr];
  }
}
