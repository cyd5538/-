const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ')

let a = input[0];
let b = input[1];

let Diff = Infinity;

for (let i = 0; i <= b.length - a.length; i++) {
  let dif = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) {
        dif++;
    }
  }
  if (dif < Diff) {
    Diff = dif;
  }
}

console.log(Diff);