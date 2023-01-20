const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const number = input[1].split(" ").map((item) => +item);


let result = 0;

function isPrime(num) {
  if (num === 1) return;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) return;
  }
  return result ++
}

for(let i=-0; i<number.length; i++){
  isPrime(number[i])
}
console.log(result);