const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")


let sum = 0;
for(let i of input){
    sum += i*i
}
console.log(sum%10)