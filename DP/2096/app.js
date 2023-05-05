// 메모리초과이지만 이게 정답이다 Node로는 풀 수 없음.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

const arr = input.slice(1).map((a) => a.split(" ").map(Number));
const Maxdp = Array.from(Array(arr.length), () => Array(3).fill(0))
const Mindp = Array.from(Array(arr.length), () => Array(3).fill(0))

Maxdp[0] = arr[0]
Mindp[0] = arr[0]

for(let i=1; i<Maxdp.length; i++){
  Maxdp[i][0] = Math.max(Maxdp[i-1][0] + arr[i][0], Maxdp[i-1][1] + arr[i][1])
  Maxdp[i][1] = Math.max(Maxdp[i-1][0] + arr[i][1], Maxdp[i-1][1] + arr[i][1], Maxdp[i-1][2] + arr[i][1])
  Maxdp[i][2] = Math.max(Maxdp[i-1][1] + arr[i][2], Maxdp[i-1][2] + arr[i][2],)
 
  Mindp[i][0] = Math.min(Mindp[i-1][0] + arr[i][0], Mindp[i-1][1] + arr[i][1])
  Mindp[i][1] = Math.min(Mindp[i-1][0] + arr[i][1], Mindp[i-1][1] + arr[i][1], Maxdp[i-1][2] + arr[i][1])
  Mindp[i][2] = Math.min(Mindp[i-1][1] + arr[i][2], Mindp[i-1][2] + arr[i][2],)
}

console.log(Math.max(...Maxdp[Maxdp.length-1]), Math.min(...Mindp[Mindp.length-1]))