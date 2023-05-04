const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const array = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

function isPossible(num) {
  let answer = 1;
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (sum + num <= array[i]) {
      answer++;
      sum = array[i];
    }
  }
  return answer;
}

function binarySearch(left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isPossible(mid) >= m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

console.log(binarySearch(1, array[array.length - 1] - array[0]));
