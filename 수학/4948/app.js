const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((a) => +a);
function Temp(num) {
  // 1이면 false
  if(num === 1) return false;
  // 2로 나눴을떄 나머지가 0이면 제외 예외로 2는 소수
  if(num%2 === 0){
    return num === 2 ? true: false
  }
  const sqrt = parseInt(Math.sqrt(num));
  // 3의 배수 5의배수 7의 배수가 아니면 소수
  for(let i=3; i<=sqrt; i+=2){
    if(num%i === 0){
      return false;
    }
  }
  return true;
}


for(let i of input){
    if(i === 0)break;
    let num = 0;
    
    for(let j=i+1; j<=i*2; j++){
        if(Temp(j)) num ++
    }
    console.log(num);
}

