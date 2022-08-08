const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);
solution(a, b, c);

function solution(A, B, C) {
    B += C
    let hour = A + parseInt(B / 60); 
    let minute = B % 60;
    if(hour >= 24){
        hour -= 24s
    }
    console.log(hour,minute)
}