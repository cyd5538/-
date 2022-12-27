const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];

solution(input);

function solution(a) {
   
   if(!a.split('').includes('0')){
      console.log(-1);
   }
   else{
      let arrTemp = a.split('').map(e => parseInt(e))
      let sumOfInput = arrTemp.reduce((acc,v)=>acc+v)
      if(sumOfInput % 3 == 0){
          arrTemp.sort((a,b)=>b-a)
          console.log(arrTemp.join(""))
      }
      else{
          console.log(-1);
      }
  }
   
}


