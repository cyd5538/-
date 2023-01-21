const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

let a = input.sort().sort((a, b) => a.length - b.length)
let result = new Set(a);
let c = [...result]
console.log(c.join("\n"))