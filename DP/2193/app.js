const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim()

let N = +input
let arr = Array(N+1).fill(0)
arr[1] = 1;
arr[2] = 1;

// 최대 정수값을 넘기기 떄문에 에러가 발생했다 BigInt 사용
for(let i=3; i < arr.length; i++){
  arr[i] = BigInt(arr[i-1]) + BigInt(arr[i-2])
}

// n이 붙기때문에 string으로 출력
console.log(String(arr[N]))