const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let items = input.map((item) => +item).sort((a,b) => a-b);
let result = []

for(let i=1; i<=30; i++){
    result.push(i)
}

result = result.filter((a) => !items.includes(a))
console.log(result.join("\n"))