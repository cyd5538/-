const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let number1 = input[1].split(" ").map((a) => +a).sort((a,b) => a-b)
let number2 = input[3].split(" ").map((a) => +a)


let result = [];
for(let i of number2){
    let start = 0;
    let end = number1[number1.length - 1];
    let middle = Math.floor((start+end)/2);
    while(number1[middle] !== i && start <= end){
        if(i > number1[middle]) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start+end)/2);
    }
    result.push(number1[middle] === i ? 1 : 0)
}
console.log(result.join(" "));