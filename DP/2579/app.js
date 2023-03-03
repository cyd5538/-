const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift();

let array = input.map(Number)
let dp = Array(N+1).fill(0);

dp[0] = array[0]
dp[1] = Math.max(array[0]+array[1], array[1])
dp[2] = Math.max(array[0]+array[2], array[1]+array[2])

for(let i=3; i<array.length; i++){
  dp[i] = Math.max(dp[i-2] + array[i], dp[i-3] + array[i-1] + array[i])
}
console.log(dp[N-1])
