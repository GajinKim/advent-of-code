const fs = require("fs");

let moveList = fs.readFileSync("input.txt").toString().split("\n");

let actions = [];

let array1 = ['r','g', 'j', 'b', 't', 'v', 'z'];
let array2 = ['j','r', 'v', 'l'];
let array3 = ['s', 'q', 'f'];
let array4 = ['z','h','n','l','f','v','q','g'];
let array5 = ['r','q','t','j','c','s','m','w'];
let array6 = ['s','w','t','c','h','f'];
let array7 = ['d','z','c','v','f','n','j'];
let array8 = ['l','g','z','d','w','r','f','q'];
let array9 = ['j','b','w','v','p'];


for (let i = 0; i < moveList.length; i++) {
    actions[i] = moveList[i].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));

    for (let j = 0; j < actions[i][0]; j++) {
        let elementToMove;
        switch(actions[i][1]) {
            case 1:
                elementToMove = array1[array1.length - 1];
                array1.pop();
                break;
            case 2:
                elementToMove = array2[array2.length - 1];
                array2.pop();
                break;
            case 3:
                elementToMove = array3[array3.length - 1];
                array3.pop();
                break;
            case 4:
                elementToMove = array4[array4.length - 1];
                array4.pop();
                break;
            case 5:
                elementToMove = array5[array5.length - 1];
                array5.pop();
                break;
            case 6:
                elementToMove = array6[array6.length - 1];
                array6.pop();
                break;
            case 7:
                elementToMove = array7[array7.length - 1];
                array7.pop();
                break;
            case 8:
                elementToMove = array8[array8.length - 1];
                array8.pop();
                break;
            case 9:
                elementToMove = array9[array9.length - 1];
                array9.pop();
                break;
        }

        switch(actions[i][2]) {
            case 1:
                array1.push(elementToMove);
                break;
            case 2:
                array2.push(elementToMove);
                break;
            case 3:
                array3.push(elementToMove);
                break;
            case 4:
                array4.push(elementToMove);
                break;
            case 5:
                array5.push(elementToMove);
                break;
            case 6:
                array6.push(elementToMove);
                break;
            case 7:
                array7.push(elementToMove);
                break;
            case 8:
                array8.push(elementToMove);
                break;
            case 9:
                array9.push(elementToMove);
                break;
        }
    }
}

console.log(array1[array1.length-1]);
console.log(array2[array2.length-1]);
console.log(array3[array3.length-1]);
console.log(array4[array4.length-1]);
console.log(array5[array5.length-1]);
console.log(array6[array6.length-1]);
console.log(array7[array7.length-1]);
console.log(array8[array8.length-1]);
console.log(array9[array9.length-1]);



// console.log(actions[1][0]); // row, col