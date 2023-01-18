const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("");
    


let arr = "abcdefghijklmnopqrstuvwxyz"
const counts = new Array(26).fill(0);
input.forEach((i) => counts[arr.indexOf(i)]++);
console.log(counts.join(" "))