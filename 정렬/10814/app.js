const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];
for(let i =1; i< input.length; i++) {
    let arr = input[i].split(" ");
    result.push(arr)

}
console.log(result.sort((a,b) => a[0]-b[0]).join("\n").replaceAll(",", " "))