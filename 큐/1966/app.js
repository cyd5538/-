const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for(let i=1; i<=T; i++){
  const [n, m] = input[i*2-1].split(" ").map(Number);
  const array = input[i*2].split(" ").map(Number).map((print, index) => {
    return {print, index}
  })
 
  let count = 0;
  while(array.length){
    const queue = array.shift();
    if(array.some((print) => print.print > queue.print)){
      array.push(queue)
    }else{
      count ++;
      if(queue.index === m){
        break;
      }
    }
  }
  console.log(count)
}