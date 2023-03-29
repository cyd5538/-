const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim()
// 666 - 1666 - 2666 - 3666 - 4666 - 5666 - 6660 - 6661 이런식으로 늘어난다

// 666부터 ++ 해서 666이 들어갈때마다 ++을 해준다음에 input이랑 같으면 탈출

let num = 666;
let count = 1;

while (count !== input) {
    num++;
    if (String(num).includes("666")) count++;
}
console.log(num);