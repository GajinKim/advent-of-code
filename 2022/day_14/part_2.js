const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let test = [];
for (let i = 0; i < file.length; i++) {
    test.push(file[i].replace(/(\r)/, "").split(','));
}

console.log(file.join("\n"));