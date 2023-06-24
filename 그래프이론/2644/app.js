const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const n = +input.shift();
const [peo1, peo2] = input.shift().split(" ").map(Number);
const peoples = +input.shift();

const graph = Array.from(Array(n + 1), () => []);
const visited = Array(n + 1).fill(false);

for (let i = 0; i < peoples; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let answer = -1;

const bfs = (start) => {
  const queue = [];
  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length > 0) {
    const [cur, count] = queue.shift();

    if (cur === peo2) {
      answer = count;
      return;
    }

    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (!visited[next]) {
        queue.push([next, count + 1]);
        visited[next] = true;
      }
    }
  }
};

bfs(peo1);
console.log(answer);
