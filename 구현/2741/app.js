const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = input[0];


let result = ""
for (let i = 1; i <= input; i++) {
  result += i +"\n"
}
console.log(result)
