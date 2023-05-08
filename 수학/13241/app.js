const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

function solution(n, m) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);

  return lcm(n, m)
}

console.log(solution(input[0],input[1]))
