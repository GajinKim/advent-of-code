const fs = require("fs");

let file = fs.readFileSync("input.txt").toString().split("\n");

let grid = [];
visible = 0;

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

      let visibleFromLeft = true;
      let visibleFromRight = true;
      let visibleFromTop = true;
      let visibleFromDown = true;

      for (let left = 0; left < j; left++) {
        leftArray.push(grid[i].charAt(left));
      }

      for (let right = j + 1; right < grid[0].length; right++) {
        rightArray.push(grid[i].charAt(right));
      }

      for (let top = 0; top < i; top++) {
        topArray.push(grid[top].charAt(j));
      }

      for (let down = i + 1; down < grid.length; down++) {
        downArray.push(grid[down].charAt(j));
      }

      for (let k = 0; k < leftArray.length; k++) {
        if (parseInt(leftArray[k]) >= parseInt(grid[i].charAt(j))) {
            visibleFromLeft = false;
        }
      }
      for (let k = 0; k < rightArray.length; k++) {
        if (parseInt(rightArray[k]) >= parseInt(grid[i].charAt(j))) {
            visibleFromRight = false;
        }
      }
      for (let k = 0; k < topArray.length; k++) {
        if (parseInt(topArray[k]) >= parseInt(grid[i].charAt(j))) {
            visibleFromTop = false;
        }
      }
      for (let k = 0; k < downArray.length; k++) {
        if (parseInt(downArray[k]) >= parseInt(grid[i].charAt(j))) {
            visibleFromDown = false;
        }
      }

      if (visibleFromLeft || visibleFromDown || visibleFromRight || visibleFromTop) {
        console.log(grid[i][j]);
        visible++;
      }

      //   console.log(leftArray);
      //   console.log(rightArray);
      //   console.log(topArray);
      //   console.log(downArray);
      //   console.log('--')
    }
  }
}

console.log(grid);

//only look up, down, left, or right
//All of the trees around the edge of the grid are visible

console.log(visible);
