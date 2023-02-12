const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(" ").map((a) => +a);

let maxSum = 0;
let tempSum = 0;
let temp = input[1].split(" ").map((a) => +a);

// 첫 번쨰 합을 넣어주고
for(let i=0; i<M; i++){
    maxSum += temp[i]
}
tempSum = maxSum;

for(let i=M; i<temp.length; i++){
    tempSum = tempSum - temp[i - M] + temp[i];
    maxSum = Math.max(maxSum, tempSum);
}
console.log(maxSum)




