const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0]);

function solution(star) {
    let result = [];
    for(let i=1; i<=star; i++){
        result +='*'
        console.log(result)
    }
    return result;
  }