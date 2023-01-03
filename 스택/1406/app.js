const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const leftStack = input[0].split("");
const rightStack = [];

for(let i=2; i<input.length; i++){
    let value = input[i].split(" ");
    if(value[0] === "L" && leftStack.length){
        rightStack.push(leftStack.pop());
    }else if(value[0] === "D" && rightStack.length){
        leftStack.push(rightStack.pop())
    }else if(value[0] === "B"){
        leftStack.pop();
    }else if(value[0] === "P"){
        leftStack.push(value[1])
    }
}   

let answer = leftStack.join("");
answer += rightStack.reverse().join("");
console.log(answer);