function solution(elements) {
  const set = new Set();
  const n = elements.length;
  const arr = [...elements, ...elements.slice(0, n - 1)];

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = arr.slice(j, j + i).reduce((a, b) => a + b, 0);
      console.log(sum)
      set.add(sum);
    }
  }

  return set.size;
}

console.log(solution([7,9,1,1,4]))