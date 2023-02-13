const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(" ").map((a) => +a);

let numbers = input[1].split(" ").map((a) => +a);
let sums = [0];

for(let i=0; i<numbers.length; i++){
    sums[i+1] = sums[i] + numbers[i]
}

let result = [];
for(let i=3; i<input.length; i++){
    let temp = input[i].split(" ").map((a) => +a);
    result.push(sums[temp[1]] - sums[temp[0]-1])
}

console.log(result.join("\n"))