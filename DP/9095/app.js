const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');


for(let i=1; i<input.length; i++){
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  let num = +input[i];
  for(let j=4; j<=num; j++){
    dp[j] = dp[j-1] + dp[j-2] + dp[j-3];
  }
  console.log(dp[num]);
}