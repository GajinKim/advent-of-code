const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < file.length; i++) {
    line = file[i];
    console.log(line);
}
