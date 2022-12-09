const fs = require("fs");

let rutsack = fs.readFileSync("input.txt").toString().split("\n");
let validItems = [];

let score = 0;

for (let i = 0; i < rutsack.length; i++) {
  let firstCompartment = rutsack[i].slice(0, rutsack[i].length / 2);
  let secondCompartment = rutsack[i].slice(
    rutsack[i].length / 2,
    rutsack[i].length
  );

  loop1: for (let j = 0; j < firstCompartment.length; j++) {
    loop2: for (let k = 0; k < secondCompartment.length; k++) {
      leftCompare = firstCompartment.charAt(j);
      rightCompare = secondCompartment.charAt(k);
      if (leftCompare === rightCompare) {
        validItems.push(leftCompare);
        break loop1;
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
