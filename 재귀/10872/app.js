const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0]

function solution (num) {
  if(num === 0) return 1
  return num * solution(num-1);
}

console.log(solution(input))