const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
let arr = input[1].split(" ").map((a) => +a).sort((a,b) => b-a);

let level = arr[0];
let gold = 0;

for(let i=1; i<arr.length; i++) {
    gold += level + arr[i];

}   
console.log(gold)