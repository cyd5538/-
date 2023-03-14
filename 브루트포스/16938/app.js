const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, l, r, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let results = [];
for (let i = 1; i < (1 << arr.length); i++) {
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    if (i & (1 << j)) {
      result.push(arr[j]);
    }
  }
  if (result.length >= 2) {
    results.push(result);
  }
}

results = results
  .map((a) => a.sort((a, b) => b - a))
  .filter((a) => Math.max(...a) - Math.min(...a) >= x)
  .filter((a) => a.reduce((a, b) => a + b, 0) >= l && a.reduce((a, b) => a + b, 0) <= r);

console.log(results.length);