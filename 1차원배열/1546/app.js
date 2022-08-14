const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arraylength = +input[0]
const arrayA = input[1].split(' ').map((item) => +item);


solution(arraylength,arrayA)

function solution(arraylength, arrayA) {
    let m = arrayA.reduce((a,b) => Math.max(a,b))
    let sum = arrayA.map((a) => a/m*100)
    let result = 0;
    for(let i=0; i<sum.length; i++){
        result += sum[i]/sum.length
    }
    return console.log(result);
}