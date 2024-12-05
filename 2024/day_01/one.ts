import { readFileSync } from 'fs';

let input : string = readFileSync("./input.txt").toString().replace(/[^0-9]+/g, " ");
let inputArray : string[] = input.toString().split(" ");

let left : number[] = [];
let right : number[] = [];

for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 == 0) {
        left.push(Number(inputArray[i]));
    } else {
        right.push(Number(inputArray[i]));
    }
}

left.sort();
right.sort();

let difference = 0;
for (let i = 0; i < left.length; i++) {
    difference += Math.abs(left[i] - right[i]);
}

console.log(difference);