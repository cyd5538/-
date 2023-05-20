const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim()


let str = 0;

// 기존의 문자열과 펠린드롬 문자열을 비교하면서 
// 문자열을 하나씩 자르면서 펠린드롬이 있나 확인해본다

for(let i=0; i<input.length; i++) {
  const reverse = input.slice(i).split("").reverse("").join("");
  if(reverse === input.slice(i).split("").join("")){
    str += i;
    break;
  }
}

console.log(str + input.length)