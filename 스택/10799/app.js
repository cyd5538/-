const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();


let answer = 0;
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") stack.push(input[i]);
  else {
    stack.pop();
    if (input[(i-1)] === "(") answer += stack.length;
    else answer += 1;
  }
}
console.log(answer);
