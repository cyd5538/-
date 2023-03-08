const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let m = +input.shift()
let array = input[0].split(" ").map(Number);
let totalSum = +input[1]

function budget (price) {
  let sum = 0;
  for(let i=0; i<array.length; i++){
    if(array[i] >= price){
      sum += price
    }else{
      sum += array[i]
    }
  }
  return sum;
}

function binarySearch (left,right) {
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    let budgetSlice = budget(mid);
    if (budgetSlice > totalSum) { 
      right = mid - 1;           
    } else {
      left = mid + 1;
    }
  }
  return right;
}

console.log(binarySearch(0,Math.max(...array)))