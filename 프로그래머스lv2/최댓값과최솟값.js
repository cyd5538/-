function solution(s) {
  // 최솟값 최댓값 구하기
  const NumMin = Math.min(...s.split(" ").map(Number));
  const NumMax = Math.max(...s.split(" ").map(Number));

  return `${NumMin} ${NumMax}`;
}

console.log(solution("1 2 3 4"));
