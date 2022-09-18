const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1], input[2]);

function solution(A, B, C) {
    let N = A / (C - B);
    let answer = Math.floor(N) + 1;
    B >= C ? (answer = -1) : answer;
    console.log(answer);
    return answer
}