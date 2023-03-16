const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const str1 = input[0]
const str2 = input[1]

const m = str1.length;
const n = str2.length;

const lcsArr = Array.from(Array(m+1), () => Array(n+1).fill(0));

for(let i=1; i<=m; i++){
  for(let j=1; j<=n; j++){
    if(str1[i-1] === str2[j-1]){
      lcsArr[i][j] = lcsArr[i-1][j-1] + 1;
    }else{
      lcsArr[i][j] = Math.max(lcsArr[i][j-1], lcsArr[i-1][j]);
    }
  }
}

let str = "";
let i = m;
let j = n;

while(i > 0 && j > 0){
  if(str1[i-1] === str2[j-1]){
    str = str1[i-1] + str;
    i--;
    j--;
  }else if(lcsArr[i-1][j] >= lcsArr[i][j-1]){
    i--;
  }else{
    j--;
  }
}

console.log(lcsArr[m][n]);
console.log(str);