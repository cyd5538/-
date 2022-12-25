const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arraylength = +input[0]
const arrayA = input[1].split(' ').map((item) => +item);


solution(arraylength,arrayA)

function solution(arraylength, arrayA) {
    let sort = arrayA.sort((a,b) => b-a)
    let result = []
    for(let i=arraylength-1; i>=0; i--){
        result.push((i+1)*sort[i]);
    }
    console.log(result.reduce((a,b) => a+b))
}   
