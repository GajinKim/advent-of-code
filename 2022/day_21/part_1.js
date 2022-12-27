const fs = require("fs");
const { root } = require("terraform");

let file = fs.readFileSync("test_input.txt").toString().split("\n");

let monkeyMap = new Map();
let fourConsecutiveLettersRegex = /(?:[a-z].*){4}/;

for (let i = 0; i < file.length; i++) {
	line = file[i].replace(/\r/, "");
	monkeyName = line.split(": ")[0];
	monkeyYell = line.split(": ")[1];
	monkeyMap.set(monkeyName, monkeyYell);
}

// select a monkey
// if that monkey's value is not a number
// look for the monkey with that equivalent

currentValue = monkeyMap.get("root");
while (monkeyMap.get("root").match(fourConsecutiveLettersRegex) == null) {
	currentMonkey;

	if (monkeyMap.get(currentMonkey).match(fourConsecutiveLettersRegex) == null) {

	}
	nextValue = currentValue.split()

}

console.log(eval(monkeyMap.get("root")));
