const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0; // 연속된 부분합
let diff = 100; // 100과의 차이

for (let i = 0; i < input.length; i++) {
  sum += input[i]; // 현재 원소를 더함

  if (Math.abs(sum - 100) <= diff) { // 100과의 차이가 더 작으면 갱신
    diff = Math.abs(sum - 100);
  } else { // 100을 넘으면 현재 합에서 이전 원소를 빼고 종료
    sum -= input[i];
    break;
  }
}

console.log(sum);





