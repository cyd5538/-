const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const m = +input[1];
const arr = input[2].split(' ').map(Number).sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let count = 0;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum < m) {
    left++;
  } else if (sum > m) {
    right--;
  } else {
    count++;
    right--;
  }
}

console.log(count);
