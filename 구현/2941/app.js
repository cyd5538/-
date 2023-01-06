const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0]

let array = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

let num = 0
for(let i of array){
  input = input.split(i).join("1")
}

console.log(input.length)
