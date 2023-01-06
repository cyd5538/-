const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require('fs').readFileSync(filePath).toString().split('\n');


console.log(Number(input[0]) + Number(input[1]));