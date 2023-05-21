const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const visited = input[1].split(' ').map(Number);

function solution(N, X, visited) {
  let MAX = 0;
  let day = 1;
  let total = 0;

  for (let i = 0; i < X; i++) {
    total += visited[i];
  }
  MAX = Math.max(MAX, total);

  for (let j = 1; j <= N - X; j++) {
    total -= visited[j - 1];
    total += visited[j + X - 1];

    if (total === MAX) {
      day += 1;
    } else if (total > MAX) {
      day = 1;
      MAX = total;
    }
  }

  return [MAX, day];
}

const result = solution(N, X, visited);

if (result[0] === 0) {
  console.log('SAD');
} else {
  result.forEach((v) => console.log(v));
}
