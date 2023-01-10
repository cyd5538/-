const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item);

let arr = [1,1,2,2,2,8]
let result = [];
for(let i=0; i<arr.length; i++){
    result.push(arr[i] - input[i]) 
}
console.log(result.join(" "));