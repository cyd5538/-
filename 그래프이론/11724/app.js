const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number)

const graph = Array.from(Array(n+1), () => []);

for(let i=1; i<input.length; i++){
  const [a,b] = input[i].split(" ").map(Number);
  graph[a].push(b)
  graph[b].push(a)
}

const dfsValid = Array(n+1).fill(false);
const dfsRes = [];
let count = 0;

function dfs(node) {
  dfsValid[node] = true;


  for(const newNode of graph[node]){
    if(!dfsValid[newNode]){
      dfs(newNode);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!dfsValid[i]) {
    count++;
    dfs(i);
  }
}

console.log(count);