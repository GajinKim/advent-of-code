const fs = require("fs");
const { setegid } = require("process");

let file = fs.readFileSync("input.txt").toString().split("\n");

let jetArray = [];
for (let i = 0; i < file.length; i++) {
  jetArray = file[i].split("");
}

let grid = new Set();
let highestRockYPos = 0;

// rocks
const horizontal = [
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],
];

const cross = [
  [3, 4],
  [2, 5],
  [3, 5],
  [4, 5],
  [3, 6],
];

const backwardsL = [
  [2, 4],
  [3, 4],
  [4, 4],
  [4, 5],
  [4, 6],
];

const vertical = [
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
];

const box = [
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 5],
];
        
let rocksSpawned = 0; 
let spawnNewRock = true;
let currentRockType = undefined;
let jetIndex = 0;

while (rocksSpawned < 2022) {
  let flat = true;
  for (let i = 0; i < 7; i++) {
    if (!grid.has(`${i},${highestRockYPos}`)) {
      flat = false;
      break;
    }
  }
  if (flat) {
    console.log("is flat at", rocksSpawned, highestRockYPos);
  }
  let currentRockPos = [];

  // determine rock type
  if (currentRockType == undefined || currentRockType == box) {
    currentRockType = horizontal;
  } else if (currentRockType == horizontal) {
    currentRockType = cross;
  } else if (currentRockType == cross) {
    currentRockType = backwardsL;
  } else if (currentRockType == backwardsL) {
    currentRockType = vertical;
  } else if (currentRockType == vertical) {
    currentRockType = box;
  }

  let rockLength = currentRockType.length;

  // spawn rock
  if (spawnNewRock) {
    rocksSpawned++;
    currentRockPos.length = 0;
    for (let i = 0; i < rockLength; i++) {
      currentRockPos.push([
        currentRockType[i][0],
        currentRockType[i][1] + highestRockYPos,
      ]);
    }
    spawnNewRock = false;
  }

  while (!spawnNewRock) {
    let jetDirection = jetArray[jetIndex];

    // update position based on jet
    if (rockCanMoveInDirectionOfJet(jetDirection, currentRockPos, rockLength)) {
      if (jetDirection == ">") {
        for (let i = 0; i < rockLength; i++) {
          currentRockPos.push([currentRockPos[i][0] + 1, currentRockPos[i][1]]);
        }
      } else {
        for (let i = 0; i < rockLength; i++) {
          currentRockPos.push([currentRockPos[i][0] - 1, currentRockPos[i][1]]);
        }
      }
      currentRockPos.splice(0, rockLength);
    }
    jetIndex = jetIndex == jetArray.length - 1 ? 0 : jetIndex + 1;

    if (rockCanMoveDown(currentRockPos, rockLength)) {
      for (let i = 0; i < rockLength; i++) {
        currentRockPos.push([currentRockPos[i][0], currentRockPos[i][1] - 1]);
      }
      currentRockPos.splice(0, rockLength);
    } else {
      for (let i = 0; i < rockLength; i++) {
        // update highestRock Pos
        if (currentRockPos[i][1] > highestRockYPos) {
          highestRockYPos = currentRockPos[i][1];
        }
        // update grid
        grid.add([currentRockPos[i][0], currentRockPos[i][1]].toString());
      }
      spawnNewRock = true;
    }
    // console.log("end", currentRockPos);
  }
}

function rockCanMoveInDirectionOfJet(jetDirection, currentRockPos, rockLength) {
  for (let i = 0; i < rockLength; i++) {
    if (jetDirection == ">") {
      if (
        grid.has([currentRockPos[i][0] + 1, currentRockPos[i][1]].toString()) ||
        currentRockPos[i][0] + 1 == 7
      ) {
        return false;
      }
    } else {
      if (
        grid.has([currentRockPos[i][0] - 1, currentRockPos[i][1]].toString()) ||
        currentRockPos[i][0] - 1 == -1
      ) {
        return false;
      }
    }
  }
  return true;
}

function rockCanMoveDown(currentRockPos, rockLength) {
  for (let i = 0; i < rockLength; i++) {
    if (
      grid.has([currentRockPos[i][0], currentRockPos[i][1] - 1].toString()) ||
      currentRockPos[i][1] - 1 <= 0
    ) {
      return false;
    }
  }
  return true;
}

console.log(highestRockYPos);
