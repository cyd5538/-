const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = +input.shift();

for(let i=0; i<n; i++){
  let n  = +input.shift();
  let arr = input.splice(0,n)
  
  let hash = {};
  for(let j=0; j<arr.length; j++){
    const temp = arr[j].split(" ")
    hash[temp[1]] = hash[temp[1]] ? hash[temp[1]] += 1 : 1
  }
  hash = Object.values(hash)

  let count = 1;

  for(let i=0; i<hash.length; i++){
    count *= hash[i] + 1
  }
  console.log(count-1)
}