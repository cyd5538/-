// 투포인터를 활용한 그리디 문제 해결
// 투포인터는 정렬된 배열에서만 사용가능
// 맨왼쪽과 맨끝쪽을 더해서 limit 보다 작으면 left++ 크면 right-- 

function solution(people, limit) {
  let sorted = people.sort((a, b) => a - b);
  
  let left = 0;
  let right = sorted.length - 1;
  let answer = 0;

  while (left <= right) {
    if (sorted[left] + sorted[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    answer++;
  }

  return answer;
}



console.log(solution([70, 50, 80, 50],100));