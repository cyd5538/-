const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number)

let answer = [];
for (let i = 1; i <= n; i++) {
  answer.push(i);
}

const solution = (arr, num) => {
  let result = [];
  if (num === 1) return arr.map((a) => [a]);

  arr.forEach((a, i, array) => {
    const temp = [...array.slice(a, i), ...array.slice(i + 1)];
    const sol = solution(temp, num - 1);
    const res = sol.map((x) => [a, ...x]);
    result.push(...res)
  });
  return result
};

console.log(solution(answer, m).join('\n').replaceAll(",", " "));
