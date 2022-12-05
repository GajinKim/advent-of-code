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

// let array1 = ['z','n'];
// let array2 = ['m','c', 'd'];
// let array3 = ['p'];


for (let i = 0; i < moveList.length; i++) {
    actions[i] = moveList[i].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));

    for (let j = actions[i][0]; j > 0; j--) {
        let elementToMove;
        switch(actions[i][1]) {
            case 1:
                elementToMove = array1[array1.length - j];
                array1.splice(array1.length - j, 1);
                break;
            case 2:
                elementToMove = array2[array2.length - j];
                array2.splice(array2.length - j, 1);
                break;
            case 3:
                elementToMove = array3[array3.length - j];
                array3.splice(array3.length - j, 1);
                break;
            case 4:
                elementToMove = array4[array4.length - j];
                array4.splice(array4.length - j, 1);
                break;
            case 5:
                elementToMove = array5[array5.length - j];
                array5.splice(array5.length - j, 1);
                break;
            case 6:
                elementToMove = array6[array6.length - j];
                array6.splice(array6.length - j, 1);
                break;
            case 7:
                elementToMove = array7[array7.length - j];
                array7.splice(array7.length - j, 1);
                break;
            case 8:
                elementToMove = array8[array8.length - j];
                array8.splice(array8.length - j, 1);
                break;
            case 9:
                elementToMove = array9[array9.length - j];
                array9.splice(array9.length - j, 1);
                break;
        }

        // console.log('hi'+ elementToMove);

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
    // console.log(array1);
    // console.log(array2);
    // console.log(array3);
    // console.log('---------')
}

// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(array5);
// console.log(array6);
// console.log(array7);
// console.log(array8);
// console.log(array9);
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