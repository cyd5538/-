const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const number = input[0];


let result = []
for(let i=1; i<=number; i++){
    if(input[i] !== "0"){
        result.push(input[i])
    }else{
        if(result && input[i] === "0"){
            result.pop(input[i])
        }
    }
}
console.log(result.reduce((a,b) => (+a)+(+b),0))
