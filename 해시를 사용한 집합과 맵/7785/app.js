const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = +input.shift();

let hash = {}
for(let i=0; i<input.length; i++){
  let temp = input[i].split(" ")
  if(temp[1] === "enter"){
    hash[temp[0]] = true;
  }else{
    delete hash[temp[0]];
  }
}

let result = [];
for (let key in hash) {
  if (hash[key]) {
    result.push(key);
  }
}

console.log(result.sort().reverse().join('\n'));