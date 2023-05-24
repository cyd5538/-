// 전형적인 스택문제
// count에 (일떄는 ++ )일떄는 --를 해준다 
// 0보다 작으면 )이 더 많이 나온경우
// 0보다 크면은 (이 더 많이 나온경우
function solution(s){
  let count = 0;

  for(let i=0; i<s.length; i++){
    if(s[i] === "("){
      count ++
    }else if(s[i] === ")"){
      count --
    }

    if(count < 0) return false
  }

  return count === 0
}   

console.log(solution("()()"))