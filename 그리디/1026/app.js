const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arraylength = +input[0]
const arrayA = input[1].split(' ').map((item) => +item);
const arrayB = input[2].split(' ').map((item) => +item);


solution(arraylength,arrayA,arrayB)

function solution(arraylength, arrayA,arrayB) {
    let A = arrayA.sort((a,b) => a-b);
    let B = arrayB.sort((a,b) => b-a);
    let result = arrayA.map((a,b) => a * B[b]).reduce((a,b) => a+b);
    console.log(result)
}   
