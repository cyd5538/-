const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [n, m, v] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS
const dfsVisited = Array(n + 1).fill(false);
const dfsResult = [];

function dfs(node) {
  dfsVisited[node] = true;
  dfsResult.push(node);

  for (const nextNode of graph[node]) {
    if (!dfsVisited[nextNode]) {
      dfs(nextNode);
    }
  }
}

dfs(v);
console.log(dfsResult.join(" "));

// BFS
const bfsVisited = Array(n + 1).fill(false);
const bfsResult = [];

function bfs(startNode) {
  const queue = [startNode];
  bfsVisited[startNode] = true;

  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);

    for (const nextNode of graph[node]) {
      if (!bfsVisited[nextNode]) {
        queue.push(nextNode);
        bfsVisited[nextNode] = true;
      }
    }
  }
}

bfs(v);
console.log(bfsResult.join(" "));