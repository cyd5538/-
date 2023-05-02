const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input.shift();
const answers = [];
for (let i = 0; i < t; i++) {
  let num1 = +input.shift();
  let note1 = new Set(input.shift().split(" ").map(Number));
  let num2 = +input.shift();
  let note2 = input.shift().split(" ").map(Number);

  for(let j=0; j<num2; j++){
    answers.push(note1.has(note2[j]) ? 1 : 0)
  }
}

console.log(answers.join('\n'));