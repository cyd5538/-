const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);

const bfs = (start, target) => {
  const queue = [[start, 0]]; 
  const visited = new Set([start]);  

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === target) {
      return count;
    }

    const nextPositions = [current - 1, current + 1, current * 2];

    for (let position of nextPositions) {
      if (position >= 0 && position <= 100000 && !visited.has(position)) {
        queue.push([position, count + 1]);
        visited.add(position);  
      }
    }
  }

  return -1; 
}

console.log(bfs(n, m));

