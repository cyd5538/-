const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim()


let stack = [];
for(let temp of input){
    if(temp === "("){
        stack.push(temp);
    }else{
        if(stack[stack.length - 1] === "("){
            stack.pop();
        }else{
            stack.push(temp);
        }
    }
}
console.log(stack.length)