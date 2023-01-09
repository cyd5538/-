const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0]

function solution (num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  return solution(num-1) + solution(num-2);
}

console.log(solution(input))