const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n").map(v => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];

//배열 생성하고 차후 소수를 판별 위해 트루로 채워줌
let prime = new Array(MAX + 1).fill(true);

  // 에라토스테네스의 체 알고리즘 적용
for (let i = 2; i * i <= MAX; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      prime[j] = false;
    }
  }
}


for (let k = 0; k < input.length; k++) {
  const v = input[k];
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`);
      break;
    }
  }
}

console.log(answer.join("\n"));

