const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

solution(input);

function solution(A) {
    let sum = 1;
    let i = 1;
    while (sum < A) {
        sum += 6 * i;
        i++;
      }
    console.log(i)
}