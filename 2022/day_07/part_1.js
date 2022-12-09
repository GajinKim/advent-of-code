const { dir } = require("console");
const fs = require("fs");

let foo = fs.readFileSync("input.txt").toString().split("\n");

let path = [];
let map = new Map();
for (let i = 0; i < foo.length - 1; i++) {
  current = foo[i].split(" ").map((item) => item.trim());

  if (current[1] == "cd") {
    if (current[2] == "..") {
      path.pop();
    } else {
      path.push(current[2]);
    }
  } else if (current[1] == "ls") {
    continue;
  } else if (current[0] == "dir") {
    continue;
  } else {
    size = parseInt(current[0]);
    // console.log(path, current[0]);

    for (let i = 0; i <= path.length; i++) {
      absPath = "/" + path.slice(0, i);
      if (map.has(absPath)) {
        map.set(absPath, map.get(absPath) + size);
      } else {
        map.set(absPath, size);
      }
    }
  }
}

total = 0;
for (const [key, value] of map.entries()) {
  if (value <= 100000) {
    total += value;
  }
}

console.log(map);
console.log(total);