const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);
solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let one = parseInt(A);
  let two = parseInt(B);
  let three = parseInt(C);

  if (one === two && one === three) {
    console.log(10000 + one * 1000);
  } else if (one === two || one === three) {
    console.log(1000 + one * 100);
  } else if (two === three) {
    console.log(1000 + two * 100);
  } else if (one !== two && one !== three) {
    console.log(Math.max(one, two, three) * 100);
  }
}
