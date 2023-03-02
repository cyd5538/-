const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const colors = input.map((index) => index.split(' ').map(Number));
const dp = Array.from(Array(N), () => Array(N).fill(0));

// 초기화
dp[0][0] = colors[0][0];
dp[0][1] = colors[0][1];
dp[0][2] = colors[0][2];

for(let i=1; i<dp.length; i++){
  dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + colors[i][0]; 
  dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + colors[i][1]; 
  dp[i][2] = Math.min(dp[i-1][1], dp[i-1][0]) + colors[i][2]; 
}

console.log(Math.min(...dp[N-1]))