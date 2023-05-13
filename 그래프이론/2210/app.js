const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((a) => a.split(" ").map(Number))

const dfsVisited = Array.from(Array(input.length), () => Array(input[0].length).fill(false))
const move = [[0,1], [0,-1], [1,0],[-1,0]]

function dfs(x, y, number) {
 
  number += input[x][y];

  if (number.length === 6) {
    combinations.add(number);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + move[i][0];
    const ny = y + move[i][1];


    if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;

    dfs(nx, ny, number);
  }
}

const combinations = new Set();
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, '');
  }
}

console.log(combinations.size);