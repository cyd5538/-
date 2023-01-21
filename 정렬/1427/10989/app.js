const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];
for(let i =0; i< input.length; i++) {
    result.push(+input[i])
}

let middle = Math.floor(result.length /2 );

console.log(result.reduce((a,b) => a+b,0)/result.length)
console.log(result.sort((a,b)=> a-b)[middle])