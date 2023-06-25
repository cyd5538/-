const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const days = +input.shift();
input = input.map((a) => a.split(" ").map(Number));

let result = Array(days + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  const [T, P] = input[i];

  if(T+i <= days){
    result[T+i] = Math.max(result[i] + P, result[T+i])
  }

  result[i + 1] = Math.max(result[i + 1], result[i]);
}

console.log(result[days]); 
