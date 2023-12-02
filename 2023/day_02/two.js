const fs = require("fs");

let lines = fs.readFileSync("input.txt").toString().split("\n");
let validGames = [];


for (let i = 0; i < lines.length; i++) {
    let game = lines[i].split(": ")[1].split("; ");
    let sets = [];

    for (let j = 0; j < game.length; j++) {
        sets.push(game[j].split(", "))
    }

    smallestBlue = 0;
    smallestGreen = 0;
    smallestRed = 0;

    for (let j = 0; j < sets.length; j++) {
        for (let k = 0; k < sets[j].length; k++) {
            if (sets[j][k].split(" ")[1] == "blue") {
                if (parseInt(sets[j][k].split(" ")[0]) > smallestBlue) {
                    smallestBlue = parseInt(sets[j][k].split(" ")[0]);
                }
            }
            else if (sets[j][k].split(" ")[1] == "red") {
                if (parseInt(sets[j][k].split(" ")[0]) > smallestRed) {
                    smallestRed = parseInt(sets[j][k].split(" ")[0]);
                }
            }
            else if (sets[j][k].split(" ")[1] == "green") {
                if (parseInt(sets[j][k].split(" ")[0]) > smallestGreen) {
                    smallestGreen = parseInt(sets[j][k].split(" ")[0]);
                }
            }
        }
    }
    validGames.push(smallestBlue * smallestGreen * smallestRed)
    }
console.log(validGames.reduce((a, v) => a + v, 0));

// console.log("15 blue".split(" "));