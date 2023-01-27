const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim()


let arr = [];
for(let i=0; i<input.length; i++){
    arr.push(input.slice(i,input.length))
}
console.log(arr.sort().join("\n"))