const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    

input = input[1].split(" ").map(Number)

function combination(arr, num) {
    let result = []; 

    if(num == 1) return arr.map(e => [e]);

    arr.forEach((e,i,array) => {
      let rest = [...array.slice(0,i), ...array.slice(i+1)];
      let combinations = combination(rest,num-1);
      let combiArr = combinations.map(x => [e, ...x]) 
      result.push(...combiArr);
    }) 
  
    return result; 
}

const result = combination(input,input.length)

let answer = 0;

for(let i=0; i<result.length; i++){
    let sum = 0;
    for(let j=0; j<result[i].length-1; j++){
        sum += Math.abs(result[i][j] - result[i][j+1]);
    }
    answer = Math.max(answer, sum)
}

console.log(answer)