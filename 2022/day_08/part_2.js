const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let grid = [];
visible = 0;
let maxBeauty = 0;

for (let row = 0; row < file.length; row++) {
  grid.push(file[row].replace(/(\r\n|\n|\r)/gm, ""));
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    // perimeter
    if (i == 0 || i == grid.length - 1 || j == 0 || j == grid[0].length - 1) {
      //   console.log(grid[i].charAt(j));
      visible++;
    } else {
      // get all the numbers left
      let leftArray = [];
      let rightArray = [];
      let topArray = [];
      let downArray = [];

      let leftScore = 1;
      let rightScore = 1;
      let topScore = 1;
      let downScore = 1;

      for (let left = j - 1; left >= 0; left--) {
        leftArray.push(grid[i].charAt(left));
      }

      for (let right = j + 1; right < grid[0].length; right++) {
        rightArray.push(grid[i].charAt(right));
      }

      for (let top = i - 1; top >= 0; top--) {
        topArray.push(grid[top].charAt(j));
      }

      for (let down = i + 1; down < grid.length; down++) {
        downArray.push(grid[down].charAt(j));
      }

      curIndex = 0;
      while (parseInt(grid[i].charAt(j)) > parseInt(leftArray[curIndex])  && curIndex != leftArray.length - 1) {
        leftScore++;
        curIndex++;
      }

      curIndex = 0;
      while (parseInt(grid[i].charAt(j)) > parseInt(rightArray[curIndex]) && curIndex != rightArray.length - 1) {
        rightScore++;
        curIndex++;
      }

      curIndex = 0;
      while (parseInt(grid[i].charAt(j)) > parseInt(topArray[curIndex]) && curIndex != topArray.length - 1) {
        topScore++;
        curIndex++;
      }

      curIndex = 0;
      while (parseInt(grid[i].charAt(j)) > parseInt(downArray[curIndex])  && curIndex != downArray.length - 1) {
        downScore++;
        curIndex++;
      }
      
      curBeauty = leftScore * rightScore * topScore * downScore;
      console.log(grid[i].charAt(j));
      console.log(leftScore, rightScore, topScore, downScore);
      console.log(curBeauty);
    //   console.log("-");
      if (curBeauty >= maxBeauty) {
        maxBeauty = curBeauty;
      }

      //   console.log(grid[i].charAt(j));
      //     console.log(leftArray);
      //     console.log(rightArray);
      //     console.log(topArray);
      //     console.log(downArray);
      //     console.log('--')

      //     console.log('leftscore', leftScore);
    }
  }
}

// console.log(grid);
console.log(maxBeauty);
