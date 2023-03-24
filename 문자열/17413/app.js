const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let arr = "";
let isValid = false;
let answer = "";

for (let i = 0; i < input.length; i++) {
  const temp = input[i];
  if (temp === "<") {
    answer += arr.split("").reverse().join("") + "<";
    arr = "";
    isValid = true;
  } else if (temp === ">") {
    answer += arr + ">";
    arr = "";
    isValid = false;
  } else if (temp === " ") {
    answer += !isValid ? arr.split("").reverse().join("") + " " : arr + " ";
    arr = "";
  } else {
    arr += temp;
  }
}

answer += arr.split("").reverse().join("");
console.log(answer);