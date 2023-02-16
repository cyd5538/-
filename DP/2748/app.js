const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

const dp = Array(input + 1).fill(BigInt(0));
dp[1] = BigInt(1);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[input].toString());