const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number); 

function solution (a,b) {
  let count = 1;

  while(a<b){
    if(b%10 === 1){
      b = Math.floor(b/10);
    }else if(b%2 === 0){
      b /= 2;
    }else{
      break;
    }
    
    count++
  }

  return a === b ? count : -1
}

console.log(solution(A,B))

