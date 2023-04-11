const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const numbers = new Array(n + 1).fill(true);

let count = 0;
for (let i = 2; i <= n; i++) {
  if (numbers[i]) {
    for (let j = i; j <= n; j += i) {
      if (numbers[j]) {
        numbers[j] = false;
        count += 1;
        if (count === k) {
          console.log(j);

        }
      }
    }
  }
}
