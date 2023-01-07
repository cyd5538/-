const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];

for(let i=1; i<= num; i++){
    console.log(" ".repeat(num-i)+"*".repeat(i*2-1))
}
