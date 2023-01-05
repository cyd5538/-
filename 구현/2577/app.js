const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let num = String(input[0] * input[1] * input[2]).split("")

let result = [];
for(let i=0; i<=9; i++){
  console.log(num.filter(a => Number(a) === i).length)
}
