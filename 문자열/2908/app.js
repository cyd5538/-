const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
    let numA = String(A)
    let numB = String(B)
    let resultA = 0
    let resultB = 0
    for(let i=numA.length-1; i>=0; i--){
        resultA += numA[i]
        resultB += numB[i]
    }
 
    console.log(Math.max(+resultA,+resultB));
}