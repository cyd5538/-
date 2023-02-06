const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
let [N, M] = input.map((a) => +a);

let arr = [];

function Temp(num) {
    if(num === 1) return
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return
        }
    }
    return arr.push(num);
}

for(let i=N; i<=M; i++){
    Temp(i)
}

if(arr.length !== 0){
    // 합계
    console.log(arr.reduce((a,b) => a+b,0));
    // 최소값
    console.log(Math.min(...arr))
}else{
    console.log(-1)
}
