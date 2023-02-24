const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(" ").map(Number);

let ArrayN = new Set();
let ArrayM = new Set();
for (let i = 0; i < input.length; i++) {
    if (i < N) {
        ArrayN.add(input[i]);
    } else {
        ArrayM.add(input[i]);
    }
}

let result = [];
ArrayN.forEach((arr) => {
    if(ArrayM.has(arr)){
        result.push(arr)
    }
})
console.log(result.length)
console.log(result.sort().join("\n"))