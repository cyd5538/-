const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const n = +input[0];
const serialNumbers = input.slice(1);

serialNumbers.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  const sumA = getSum(a);
  const sumB = getSum(b);
  if (sumA !== sumB) {
    return sumA - sumB;
  }

  return a.localeCompare(b);
});

console.log(serialNumbers.join('\n'));

function getSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}
