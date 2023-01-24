const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
for(let i = 0; i<input.length; i++){
    console.log(`Case #${i+1}: ${input[i].split(" ").reverse().join(" ")}`)
}