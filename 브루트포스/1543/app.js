const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const arr1 = input[0];
const arr2 = input[1];

let count = 0;
let index = 0;

while(arr1.length !== index){
  if(arr1.slice(index,index+arr2.length) === arr2) {
    count++
    index += arr2.length
  }else{
    index++
  }
}

console.log(count)