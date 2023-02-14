const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = input[1].split(" ").map((a) => +a);
let M = +input[0].split(" ")[1]

let sum = 0;
let count = 0;
let left = 0;
let right = 0;

while(right <= numbers.length){
  if(sum === M){
    count++;
    sum -= numbers[left];
    left++
  }else if(sum < M){
    sum += numbers[right]
    right++
  }else if(sum > M){
    sum -= numbers[left];
    left++
  }
}
console.log(count)