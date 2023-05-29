// dp를 이용한 간단한 문제
function solution(n) {
  let answer = Array(n)
  answer[0] = 0
  answer[1] = 1

  for(let i=2; i<=n; i++){
    answer[i] = (answer[i-1] + answer[i-2]) %1234567
  } 

  return answer[n]
}

console.log(solution(3))