const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(row => row.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visited = Array.from(Array(N), () => Array(M).fill(false));

const bfs = (startX, startY) => {
  const queue = [];
  queue.push([startX, startY]);
  visited[startX][startY] = true;
  let distance = 1;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      if (x === N - 1 && y === M - 1) {
        return distance;
      }

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
          continue;
        }

        if (!visited[nx][ny] && maze[nx][ny] === 1) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }

    distance++; 
  }

  return -1;
};

console.log(bfs(0, 0));