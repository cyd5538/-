const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [n,m] = input[0].split(" ").map(Number);

let array = []
for(let i=1; i<input.length; i++){
  array.push(+input[i])
}

// 랜선 갯수 구하는 함수
function lineSum (line) {
  let sum = 0;
  for(let i=0; i<array.length; i++){
    sum += Math.floor(array[i]/line)
  }
  return sum;
}

// 이진탐색
function binarySearch (left, right) {
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    let num = lineSum(mid);
    if (num >= m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

console.log(binarySearch(0, Math.max(...array)))