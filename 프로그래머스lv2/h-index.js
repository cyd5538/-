// 논문들을 내림차순으로 정렬해서, 
// citations배열만큼 포문을 돌린다
// 논문의 수와 인용된 수가 같거나 작으면 멈춤 
// 멈춘 그 순간의 카운팅한 논문의 수가 H-Index
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }
  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5]));