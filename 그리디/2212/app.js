// 문제기 이해가 되지않아 문제해석을 찾아보고 풀었다.
// https://junghyeonsu.tistory.com/278
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n')

array = array[0].split(" ").map(Number).sort((a,b) => a-b)
let score = []

for(let i=0; i<array.length-1; i++) {
  score.push(array[i+1] - array[i])
}

score.sort((a,b) => b-a)

let result = 0;
for(let i=K-1; i< N-1; i++){
  result += score[i]
}

console.log(result)