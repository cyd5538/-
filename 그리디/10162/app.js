const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

solution(input);

function solution(input) {
  let A = 300;
  let B = 60;
  let C = 10;
  let answer = '';
  let temp = input;

  answer += `${parseInt(temp / A)} `;
  temp = temp % A;

  answer += `${parseInt(temp / B)} `;
  temp = temp % B;

  answer += `${parseInt(temp / C)}`;
  temp = temp % C;

  answer = temp !== 0 ? -1 : answer
  console.log(answer)
}