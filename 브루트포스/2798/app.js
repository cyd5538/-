const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(" ").map((a) => +a)
let array = input[1].split(" ").map((a) => +a)

let result = [];
for(let i = 0; i < array.length; i++){
    for(let j = i+1; j<array.length; j++){
        for(let k = j+1; k<array.length; k++){
            let sum = array[i] + array[j] + array[k];
            result.push(sum);
        }
    }
}
result = result.filter((a) => a <= m).sort((a,b) => a-b)
console.log(result[result.length - 1]);