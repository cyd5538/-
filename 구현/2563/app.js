const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const n = +input.shift();
const numbers = input.map((a) => a.split(" ").map(Number));
const paper = Array.from(Array(100), () => Array(100).fill(0));

for(let i=0; i<numbers.length; i++){
  const [a,b] = numbers[i];

  for(let i=a; i<a+10; i++){
    for(let j=b; j<b+10; j++){
      paper[i][j] = 1
    }
  }
}

let count = 0
for(let i=0; i<paper.length; i++){
  for(let j=0; j<paper[0].length; j++){
    if(paper[i][j] === 1) count ++
  }
}

console.log(count)