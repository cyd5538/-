const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
solution(input);

function solution(a) {
    let count = a.trim().split(' ');
    if (count[0] === '') {
        console.log(0);
    } else {
        console.log(count.length);
    }

}