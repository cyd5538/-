const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [n, m] = input[0].split(" ").map(Number);
let arr1 = new Set(input[1].split(" ").map(Number))
let arr2 = new Set(input[2].split(" ").map(Number))

const difference1 = new Set([...arr1].filter(x => !arr2.has(x))).size;
const difference2 = new Set([...arr2].filter(x => !arr1.has(x))).size;

console.log(difference1+difference2)