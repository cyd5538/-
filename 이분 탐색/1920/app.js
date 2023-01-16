const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let number1 = input[1].split(" ").map((a) => +a).sort((a,b) => a-b)
let number2 = input[3].split(" ").map((a) => +a)

let result = ""
for(let i=0; i<number2.length; i++){
    let start = 0;
    let last = number1.length-1
    let middle = Math.floor((start+last) / 2);
    let num = number2[i]
    while(number1[middle] !== num && start <= last){
        if(num < number1[middle]) last = middle -1
        else start = middle + 1
        middle = Math.floor((start+last) / 2);
    }
    result += number1[middle] === num ? 1 : 0
}
console.log(result.split("").join("\n"))