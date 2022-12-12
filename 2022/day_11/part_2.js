const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let monkeys = [];

for (let i = 0; i < file.length - 5; i += 7) {
  let curMonkey = {
    items: file[i + 1]
      .split(":")[1]
      .split(",")
      .map((item) => parseInt(item)),
    operation: file[i + 2].split(" = ")[1],
    test: parseInt(file[i + 3].split(" ")[5]),
    true: parseInt(file[i + 4].split(" ")[9]),
    false: parseInt(file[i + 5].split(" ")[9]),
    checks: 0,
  };
  monkeys.push(curMonkey);
}

let highestValue = monkeys.reduce((acc, monkey) => (acc *= monkey.test), 1);

for (let round = 0; round < 10000; round++) {
  for (let i = 0; i < monkeys.length; i++) {
    while (monkeys[i].items.length != 0) {
      let worryLevel =
        eval(monkeys[i].operation.replace(/old/g, monkeys[i].items.shift())) %
        highestValue;
      monkeys[
        monkeys[i][worryLevel % monkeys[i].test == 0 ? "true" : "false"]
      ].items.push(worryLevel);
      monkeys[i].checks++;
    }
  }
}

// sort the monkeys by their number of checks
monkeys.sort((monkeyA, monkeyB) => monkeyB.checks - monkeyA.checks);
console.log(monkeys[0].checks * monkeys[1].checks);
