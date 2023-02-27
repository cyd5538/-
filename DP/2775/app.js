const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const num = input.shift()

for(let i=0; i<num; i++){
  const m = input.shift();
  const n = input.shift();
  
  const Dp = Array.from(Array(m+1), () => Array(n+1).fill(0));

  for(let i=0; i<=n; i++){
    Dp[0][i] = i 
  }

  for(let i=1; i<=m; i++){
    for(let j=1; j<=n; j++){
      Dp[i][j] = Dp[i-1][j] + Dp[i][j-1];
    }
  }

  console.log(Dp[m][n])
}