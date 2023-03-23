
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [n, m] = input[0].split(" ").map(Number);

let pocketmon = input.slice(1,n+1)
let pocket = input.slice(n+1,input.length)

const pocketHash = {}
for(let i=0; i<pocketmon.length; i++){
  pocketHash[i+1] = pocketmon[i]
  pocketHash[pocketmon[i]] = i+1
}

let result = [];
for(let i=0; i<pocket.length; i++){
  result.push(pocketHash[pocket[i]])
}

console.log(result.join("\n"))