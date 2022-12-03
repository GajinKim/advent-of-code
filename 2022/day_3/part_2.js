const fs = require("fs");

let rutsack = fs.readFileSync("input.txt").toString().split("\n");
let validItems = [];

let score = 0;

for (let i = 0; i < rutsack.length - 2; i+=3) {
  let sack1 = rutsack[i];
  let sack2 = rutsack[i + 1];
  let sack3 = rutsack[i + 2];

  loop1: for (let j = 0; j < sack1.length; j++) {
    loop2: for (let k = 0; k < sack2.length; k++) {
      loop3: for (let l = 0; l < sack3.length; l++) {
        if (
          sack1.charAt(j) == sack2.charAt(k) &&
          sack1.charAt(j) == sack3.charAt(l)
        ) {
          validItems.push(sack1.charAt(j));
          break loop1;
        }
      }
    }
  }
}

for (let i = 0; i < validItems.length; i++) {
  item = validItems[i];
  if (item == item.toLocaleUpperCase()) {
    score += item.charCodeAt(0) - 38;
  } else {
    score += item.charCodeAt(0) - 96;
  }

  //   console.log(item, score);
}

console.log(score);
