function solution(k, tangerine) {
    
  let answer = 0;
  let count = new Set();
  // 객체에다가 각 숫자가 몇번 나왔는지 넣어주고
  tangerine.forEach((a) => {
    count[a] = (count[a] || 0) +1
  })

  // 횟수가 많은순으로 정렬
  let countArr = Object.values(count).sort((a,b) => b-a);

  // for문을 돌려서 k가 i보다 크면 빼주고
  // for문 돌리는 횟수를 answer++
  for(let i of countArr){
    answer++
    if(k > i) k -= i;
    else break;
  }

  return answer
}

console.log(solution(6,[1, 3, 2, 5, 4, 5, 2, 3]))