const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const array = input.slice(1).map(row => row.split(' ').map(Number));
const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const visited = Array.from(Array(N), () => Array(M).fill(false));

// queue를 shift로 가져오면 시간초과걸린다
// 인덱스를 사용해서 큐의시작과 끝을 관리

const bfs = () => {
  const queue = [];
  let front = 0; 
  let rear = 0; 
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (array[i][j] === 1) {
        queue[rear++] = [i, j];
      }
    }
  }

  while (front < rear) {
    const [x, y] = queue[front++];

    for (let i = 0; i < 4; i++) {
      const xMove = x + moves[i][0];
      const yMove = y + moves[i][1];

      if (xMove < 0 || yMove < 0 || xMove >= N || yMove >= M) continue;

      if (array[xMove][yMove] === 0 && !visited[xMove][yMove]) {
        array[xMove][yMove] = array[x][y] + 1;
        visited[xMove][yMove] = true;
        queue[rear++] = [xMove, yMove]; 
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (array[i][j] === 0) {
        return -1;
      }
      answer = Math.max(answer, array[i][j]);
    }
  }
  return answer - 1;
};

console.log(bfs());