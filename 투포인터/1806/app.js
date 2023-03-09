const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let minLen = Infinity; //최소값을 구해야하니까 Infinity설정

// while문을 right 배열의크기만큼 돌게
while(right < n){
  sum += arr[right];
  right++;
  // sum이 m보다 커지면 left 값을 뺴고 left위치를 한칸 올려줌
  while(sum >= m){
    minLen = Math.min(minLen, right-left) // right-left 뺀 자릿수 값 업데이트
    sum -= arr[left];
    left++
  }
}
// 0일때는 0이 나와야 하기 때문에
console.log(minLen !== Infinity ? minLen : 0);
