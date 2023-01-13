const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split("").map((e) => +e);
let arr = Array(10).fill(0);

for (let n of num) {
   arr[n]++;
}

// 6 이랑 9 횟수 더해서 나누서 대입
let sixnine = Math.ceil((arr[6] + arr[9])/2);

arr[6] = sixnine;
arr[9] = sixnine;

let answer = 0;
for (let c of arr) answer = Math.max(answer, c);
console.log(answer);