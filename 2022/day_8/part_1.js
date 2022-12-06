const fs = require("fs");

let foo = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < foo.length; i++) {
    console.log(foo[i]);
}
