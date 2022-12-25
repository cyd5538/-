const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

solution(input);

function solution(a) {
   let namerge = 1000-a

   let number = [500,100,50,10,5,1].filter((num) => num <= namerge);
   let count = 0;

   for(let i of number) {
     if(namerge === 0){
         break;
     }
     if(namerge >= 1){
        count += parseInt(namerge/i);
        namerge = namerge%i
     }

   }
   console.log(count);
}

