const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = +input.shift();
let people = input.map((a) => a.split(" ").map(Number));


let result = [];

for(let i=0; i<n; i++){
  // 기존 순위를 1위로 해놓고
  let rank = 1;
  // 반복문안에 반복문을 한번 더 돌린다
  for(let j=0; j<n; j++){
    // 숫자가 같을땐 돌리지말고
    if(i === j) continue;
    // 키와 몸무게가 둘다 작으면 순위를 올려준다/
    if(people[i][0] < people[j][0] && people[i][1] < people[j][1]) rank++
  }
  result.push(rank)
}

console.log(result.join(" "))