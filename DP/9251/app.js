const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const arr1 = input[0];
const arr2 = input[1];

let m = arr1.length;
let n = arr2.length;

const lcsArr = Array.from(Array(m+1), () => Array(n+1).fill(0));

for(let i=1; i<=m; i++){
  for(let j=1; j<=n; j++){
    if(arr1[i-1] === arr2[j-1]){
      lcsArr[i][j] = lcsArr[i-1][j-1] + 1
    }else{
      lcsArr[i][j] = Math.max(lcsArr[i-1][j], lcsArr[i][j-1]);
    }
  }
}

console.log(lcsArr[m][n])