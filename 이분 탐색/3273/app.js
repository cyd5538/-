const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = input[1].split(" ").map((a) => +a).sort((a,b) => a-b);
let N = +input[2]


let first = 0;
let last = numbers.length;
let count = 0;

while(first < last){
    let sum = numbers[first] + numbers[last];
    if(sum === N){
        count++;
        last--;
        first++;
    }else if(sum < N){
        first++;
    }else{
        last--;
    }
}
console.log(count)