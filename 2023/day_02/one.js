const fs = require("fs");

let lines = fs.readFileSync("input.txt").toString().split("\n");
let validGames = [];


for (let i = 0; i < lines.length; i++) {
    currentSetIsValid = true;

    let game = lines[i].split(": ")[1].split("; ");
    let sets = [];

    for (let j = 0; j < game.length; j++) {
        sets.push(game[j].split(", "))
    }

    outerLoop: 
        for (let j = 0; j < sets.length; j++) {
            for (let k = 0; k < sets[j].length; k++) {
                if (sets[j][k].split(" ")[1] == "blue") {
                    if (parseInt(sets[j][k]) > 14) {
                        currentSetIsValid = false
                        break outerLoop;
                    }
                }
                else if (sets[j][k].split(" ")[1] == "red") {
                    if (parseInt(sets[j][k]) > 12) {
                        currentSetIsValid = false
                        break outerLoop;
                    }
                }
                else if (sets[j][k].split(" ")[1] == "green") {
                    if (parseInt(sets[j][k]) > 13) {
                        currentSetIsValid = false
                        break outerLoop;
                    }
                }
            }
        }
        if (currentSetIsValid) {
            validGames.push(i + 1);
        }
    }
console.log(validGames.reduce((a, v) => a + v, 0));

// console.log("15 blue".split(" "));