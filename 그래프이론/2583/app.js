const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const [n, m, k] = input[0].split(" ").map(Number);
const array = Array.from({ length: n }, () => Array(m).fill(0));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= k; i++) {
  const [y1, x1, y2, x2] = input[i].split(" ").map(Number);
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      array[x][y] = 1;
    }
  }
}

function dfs(x, y) {
  visited[x][y] = true;
  let count = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (array[nx][ny] === 0 && !visited[nx][ny]) {
        count += dfs(nx, ny);
      }
    }
  }

  return count;
}

const result = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (array[i][j] === 0 && !visited[i][j]) {
      result.push(dfs(i, j));
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.length);
console.log(result.join(' '));
