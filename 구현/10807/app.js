const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arraylength = +input[0]
const arrayA = input[1].split(' ').map((item) => +item);
const number = +input[2]
console.log(arrayA.filter((a) => a === number).length)