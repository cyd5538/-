const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let [n, m] = input[0].split(" ").map(Number);
let arrays = input.slice(1, n+1).map(a => a.split(" "))
let array = input.slice(n+1,input.length);

const ArrayObj = {};

for(let i=0; i<arrays.length; i++){
  ArrayObj[arrays[i][0]] = ArrayObj[arrays[i][0]] ? arrays[i][1] : arrays[i][1]
}

for(let i=0; i<array.length; i++){
  console.log(ArrayObj[array[i]])
}
