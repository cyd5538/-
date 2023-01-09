const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

let arr = "abcdefghijklmnopqrstuvwxyz";

let result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(input.indexOf(arr[i]));
}
console.log(result.join(" "))