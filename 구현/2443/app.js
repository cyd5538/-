const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];

for(let i=num; i>0; i--){
    console.log(" ".repeat(num-i)+"*".repeat(i+i-1))
}
