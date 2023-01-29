const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((a) => +a);

// 5번째 수를 찾고
const sortInput = [...input].sort((a, b) => b - a)[4];
console.log(input.filter((a,b) => a>=sortInput).reduce((a,b) => a+b,0))
input = input.map((a,b) => {
    if(a >= sortInput){
        return b+1
    }
})
input = input.filter((a) => a !== undefined)

console.log(input.join(" "))