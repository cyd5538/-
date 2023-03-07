const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ")
const array = input[1].split(" ").map(Number).sort((a,b) => a-b)
console.log(array[M-1])