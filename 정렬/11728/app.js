const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((a) => +a);
let stack = [];
for(let i=1; i<input.length; i++){
    let temp = input[i].split(" ")
    stack.push(temp)
}
console.log(stack.flat().sort((a,b) => a-b).join(" "))