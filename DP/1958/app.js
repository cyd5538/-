const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const str1 = input[0];
const str2 = input[1];
const str3 = input[2];

function lcsLength(st1, st2, st3) {
  const m = st1.length;
  const n = st2.length;
  const l = st3.length;

  const lcsArr = Array.from(Array(m + 1), () =>
    Array.from(Array(n + 1), () => Array(l + 1).fill(0))
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= l; k++) {
        if (st1[i - 1] === st2[j - 1] && st2[j - 1] === st3[k - 1]) {
          lcsArr[i][j][k] = lcsArr[i - 1][j - 1][k - 1] + 1;
        } else {
          lcsArr[i][j][k] = Math.max(
            lcsArr[i - 1][j][k],
            lcsArr[i][j - 1][k],
            lcsArr[i][j][k - 1]
          );
        }
      }
    }
  }

  return lcsArr[m][n][l];
}

console.log(lcsLength(str1, str2, str3));