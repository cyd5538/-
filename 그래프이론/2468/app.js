const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const graph = Array.from(Array(n), () => Array(n).fill(false));

const nums = input.slice(1).map((a) => a.split(" ").map(Number));
const moves = [[0,1], [0,-1], [1,0], [-1,0]];

function dfs(x,y,c) {
  graph[x][y] = true;

  for(let [moveX, moveY] of moves){
    const mX = x + moveX;
    const mY = y + moveY;

    if(mX < 0 ||
       mY < 0 ||  
       mY >= n ||  
       mX >= n ||
       graph[mX][mY] ||
       nums[mX][mY] <= c 
    ){
      continue
    }

    dfs(mX,mY,c)
  }
}

let count = 0;

for(let c=0; c<=100; c++){
  graph.forEach((a) => a.fill(false))
  let tempcount = 0
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(!graph[i][j] && nums[i][j] > c){
        dfs(i,j,c)
        tempcount++
      }
    }
  }
  count = Math.max(count,tempcount)
}
console.log(count);