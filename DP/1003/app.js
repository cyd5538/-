const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=1; i<input.length; i++) {
  let temp = +input[i];
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let j=2; j<=temp; j++) {
    dp[j] = dp[j-1] + dp[j-2];
  }

  if(temp === 0){
    console.log(1, 0)
  }else if(temp === 1){
    console.log(0, 1)
  }else if(temp === 3){
    console.log(1, 2)
  }else{
    console.log(dp[temp-2], dp[temp-1])
  }
}