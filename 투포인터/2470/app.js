const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input.shift();
let arr = input[0].split(" ").map(Number).sort((a,b) => a-b);

let left = 0;
let right = N-1;
let abs = Math.abs(arr[left]+arr[right]);
let sum = 0;
let result = [arr[left], arr[right]];

while(left < right){
  sum = arr[left] + arr[right];
  if(Math.abs(sum) < abs){
    abs = Math.abs(sum);
    result = [arr[left], arr[right]];
  }
  if(sum < 0){
    left++;
  } else {
    right--;
  }
}

console.log(result.join(" "));
