// 투포인터를 활용한 그리디 문제 해결
// 투포인터는 정렬된 배열에서만 사용가능
// 맨왼쪽과 맨끝쪽을 더해서 limit 보다 작으면 left++ 크면 right-- 

function solution(people, limit) {
  let sorted = people.sort((a, b) => a - b);
  
  let answer = 0;
  let start = 0;
  let end = people.length -1;

  while(left <= right){
    let temp = sorted[start] + sorted[end];

    if(temp < limit){
      start ++
    }else if(temp > limit){
      end ++;
    }

    answer ++
  }

  return answer
}


console.log(solution([70, 50, 80, 50],100));