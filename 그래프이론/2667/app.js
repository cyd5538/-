const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0]); // 정사각형 지도의 크기
const map = input.slice(1).map(row => row.split('').map(Number)); 
const visited = Array.from(Array(n), () => Array(n).fill(false)); 
const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 이동

function dfs (x,y) {
  visited[x][y] = true;
  let count = 1;

  for(let [moveX,moveY] of moves){
    const mX = x + moveX;
    const mY = y + moveY;

    if(mX < 0 || mY < 0 || mX >= n || mY >= n || visited[mX][mY] || map[mX][mY] === 0 ){
      continue
    }

    count += dfs(mX,mY)
  }

  return count;
}

let answer = []

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(!visited[i][j] && map[i][j] !== 0){
      answer.push(dfs(i,j))
    }
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length)
console.log(answer.join("\n"))