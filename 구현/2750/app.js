const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const number = +input[0];

let array = [];
for(let i=1; i<=number; i++) {
    array.push(input[i])
}
console.log(array.sort((a,b) => a-b).join("\n"))