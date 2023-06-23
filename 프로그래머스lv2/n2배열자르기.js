const solution = (n, left, right) => {
  const answer = [];

  // 1,2,3,2,2,3,3,3,3n^2 배열 자르기

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return answer;
};


console.log(solution(3,2,5))