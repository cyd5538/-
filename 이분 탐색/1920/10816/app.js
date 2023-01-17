const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let number1 = input[1].split(" ").map((a) => +a).sort((a,b) => a-b)
let number2 = input[3].split(" ").map((a) => +a)

let hash = {};

for(let i of number1){
    hash[i] ? hash[i] += 1 : hash[i] = 1;
}

let result = []
for(let i=0; i<number2.length; i++){
    let val = hash[number2[i]];
    result.push(val !== undefined ? val : 0)
}
console.log(result.join(" "))

// 메모리도 시간도 많이 잡아먹어
// 이분탐색으로 풀어보려했는데 실패 다음에 이분탐색으로 다시 도전해보겠음