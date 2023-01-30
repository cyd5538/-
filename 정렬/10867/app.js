const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const number = input[1].split(" ").map((item) => +item);


let sortNumber = new Set(number)
let a = [...sortNumber].sort((a,b) => a-b).join(" ")
console.log(a)