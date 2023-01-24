const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
let result = 0;
for(let arr of input){
    let stack = [];
    for(let i of arr){
        if(i === "A" ){
            if(stack[stack.length-1] === "A"){
                stack.pop();
            }else{
                stack.push(i)
            }
        }else if(i === "B" ){
            if(stack[stack.length-1] === "B"){
                stack.pop();
            }else{
                stack.push(i)
            }
        }
    }
    if(stack.length === 0) result++
}   
console.log(result)