const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
let array = input.map(Number)

// 양수와 음수를 따로 배열로 뽑기
let plus = array.filter((a) => a > 0).sort((a,b) => b-a);
let minus = array.filter((a) => a <= 0).sort((a,b) => a-b);

let result = 0;

for(let i=0; i<plus.length; i+=2){
  // 홀수일때는 그냥 더하고
  if(i === plus.length-1) result += plus[i]
  // 두개의 더한 값이 곱한 값 보다 크면 더한 값을
  else if(plus[i] + plus[i+1] > plus[i] * plus[i+1]) result += plus[i] + plus[i+1]
  // 그렇지 않으면 곱한 값을 넣자
  else result += plus[i] * plus[i+1]
}

for(let i=0; i<minus.length; i+=2){
  if(i === minus.length-1) result += minus[i]
  else if(minus[i] + minus[i+1] > minus[i] * minus[i+1])result += minus[i] + minus[i+1];
  else result += minus[i] * minus[i+1]
}

console.log(result)