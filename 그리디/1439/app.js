const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

solution(input);

function solution(a) {
   let array = a.split("");
   let arr = []
  
   for(let i=0; i<array.length; i++) {
      if(array[i] !== array[i+1]){
         arr.push(array[i])
      }
   }
   let zero = arr.filter((a) => a === "0").length
   let one = arr.filter((a) => a === "1").length

   console.log(Math.min(zero,one));
}

