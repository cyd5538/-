const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const N = Number(input[0]);

const arr = input.slice(1).map(row => row.trim().split(''));
const visited = Array.from(Array(N), () => Array(N).fill(false));
const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const bfs = (x,y,rgb) => {
  const queue = [[x,y]];
  visited[x][y] = true;
  const curColor = arr[x][y];

  while(queue.length){
    const [curX,curY] = queue.shift();

    for(let i=0; i<4; i++){
      const mX = curX + moves[i][0]
      const mY = curY + moves[i][1]

      if(mX < 0 || mY < 0 || mX >= N || mY >= N){
        continue;
      }

      if(!visited[mX][mY]){
        const moveColor = arr[mX][mY]
        if(rgb){
          if(curColor === "R" || curColor === "G"){
            if(moveColor === "R" || moveColor === "G"){
              queue.push([mX,mY])
              visited[mX][mY] = true;
            }
          }else{
            if(curColor === moveColor){
              queue.push([mX,mY])
              visited[mX][mY] = true;
            }
          }
        }else{
          if(curColor === moveColor){
            queue.push([mX,mY])
            visited[mX][mY] = true;
          }
        }
      }
    }
  }
}

let normalCount = 0;
let blindCount = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, false);
      normalCount++;
    }
  }
}

visited.forEach(row => row.fill(false)); 

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, true);
      blindCount++;
    }
  }
}

console.log(normalCount, blindCount);