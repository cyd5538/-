const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const number = +input[0];


for(let i = 1; i<=number; i++){
    const prev = input[i].split(" ")[0]
    const next = input[i].split(" ")[1]
    let result = ''
    for(let j=0; j<next.length; j++){
        result += next[j].repeat(prev)
    }
    console.log(result)
}