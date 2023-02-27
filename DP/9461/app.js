const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const num = input.shift();

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16

for(let i=0; i<num; i++){
  const dp = [];
  dp[0] = 1
  dp[1] = 1
  dp[2] = 1
  for(let j=3; j<input[i]; j++){
    dp[j] = dp[j-2] + dp[j-3]
  }
  console.log(dp[input[i]-1])
}