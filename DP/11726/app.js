const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim()

// 규칙을 잘 찾아보자
const dp = [];
dp[1] = 1;
dp[2] = 2;

// dp[4] = 5;
for(let i=3; i<=input; i++){
    dp[i] = (dp[i-1] + dp[i-2])%10007 
}
console.log(dp[input])
