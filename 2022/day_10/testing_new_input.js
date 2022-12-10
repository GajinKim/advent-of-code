const fs = require("fs");

let file = fs.readFileSync(process.argv[2]).toString().split("\n");

for (let i = 0; i < file.length; i++) {
  console.log(file[i]);
}
