const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const graph = input.slice(1).map((a) => a.split(" ").map(Number));
const dfsVisited = Array.from(Array(n), () => Array(m).fill(false));
const move = [[0,1], [0,-1],[-1,0],[1,0]];

function dfs (x,y) {
  dfsVisited[x][y] = true
  let num = 1;

  for(let i=0; i<move.length; i++){
    const xplus = move[i][0] + x
    const yplus = move[i][1] + y

    if(
      xplus >= 0 &&
      yplus >= 0 &&
      xplus < n &&
      yplus < m &&
      !dfsVisited[xplus][yplus] &&
      graph[xplus][yplus] !== 0
      ){
      num += dfs(xplus, yplus);
    }
  }
  return num
}

let temp = 0;
let count = 0;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(!dfsVisited[i][j] && graph[i][j] === 1){
      temp = Math.max(dfs(i,j), temp)
      count++
    }
  }
}

console.log(count)
console.log(temp)