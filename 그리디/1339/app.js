const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const [ n, ...words] = input;

let alphabet = {};

for(let i=0; i<words.length; i++){
  const temp = words[i]
  for(let j=0; j<temp.length; j++){
    if(!alphabet[temp[j]]) alphabet[temp[j]] = 0
    alphabet[temp[j]] += 10 ** (temp.length - j - 1)
  }
}

alphabet = Object.values(alphabet).sort((a,b) => b-a)

let result = 0;
for(let i=0; i<alphabet.length; i++){
  result += alphabet[i] * (9-i);
}

console.log(result)