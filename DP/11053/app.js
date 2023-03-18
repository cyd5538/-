const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = +input.shift();

let arr = String(input).split(" ").map((Number))
let dp = Array(N).fill(1);

for(let i=1; i<arr.length; i++){
  for(let j=0; j<i; j++){
    if(arr[i] > arr[j]){
      dp[i] = Math.max(dp[i], dp[j]+1)
    }
  }
}
console.log(Math.max(...dp))