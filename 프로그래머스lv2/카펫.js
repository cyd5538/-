function solution(brown, yellow) {
  let sum = brown+yellow;
  let answer = [];

  // 테두리 안에 노란색이 있으려면 가로는 최소 3부터 시작해야됨
  for(let i=3; i<=sum; i++){
    // 나눈값의 몫이 0일때
    if(sum%i === 0){
      // 나머지값을 변수로 저장
      let j = sum/i;
      // i(가로) 가 j(세로) 보다 크거나 같아야되고
      // 가로에서 2뺴고 세로에서 2뺴서 곱한값이 yellow면 정답
      if(j <= i && (i-2)*(j-2) === yellow ){
        answer.push(i,j)
      }
    }
  }

  return answer
}

console.log(solution(10,2))