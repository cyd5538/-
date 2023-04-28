const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number)

function combinations (arr, num) {
  let result = [];
  if(num === 1) return arr.map((a) => [a]);

  arr.forEach((a, i, array) => {
    const temp = [...array.slice(0, i), ...array.slice(i+1)]
    const combi = combinations(temp, num-1);
    const res = combi.map((x) => [a, ...x]);
    result.push(...res);
  })

  return result;
}

const array = [];
for(let i=1; i<=n; i++){
  array.push(i)
}
  
const result = combinations(array,m)

console.log(result.join("\n").replaceAll(",", " "))