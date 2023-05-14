const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [w, h, count] = input[0].split(' ').map(Number);

const graph =  Array.from(Array(w), () => Array(h).fill(false))
const move = [[-1,0], [1,0], [0,1], [0,-1]];

for(let i=1; i<input.length; i++){
  const [a,b] = input[i].split(" ").map(Number);
  graph[a-1][b-1] = true
}

const dfsVisited =  Array.from(Array(w), () => Array(h).fill(false))
const dfsRes = [];

function dfs (x,y) {
  dfsVisited[x][y] = true
  let num = 1;

  for(let i=0; i<move.length; i++){
    const xplus = move[i][0] + x
    const yplus = move[i][1] + y

    if(
      xplus >= 0 &&
      yplus >= 0 &&
      xplus < w &&
      yplus < h &&
      !dfsVisited[xplus][yplus] &&
      graph[xplus][yplus]
      ){
      num += dfs(xplus, yplus);
    }
  }
  return num
}

let maxCount = 0;

for (let i = 0; i < w; i++) {
  for (let j = 0; j < h; j++) {
    if (!dfsVisited[i][j] && graph[i][j]) {
      maxCount = Math.max(maxCount, dfs(i, j));
    }
  }
}

console.log(maxCount);