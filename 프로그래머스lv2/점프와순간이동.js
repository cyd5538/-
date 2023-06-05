function solution(n) {
  let num = 0;
  // 거꾸로 n에서 2를 나눴는데 나머지가 0이면 나누고 아니면 -1을 뺴주자
  // -1뺄떄는 num ++
  while(n>0){
    if(n%2 === 0){
      n = n/2
    }else{
      n = n-1
      num ++
    }
  }
  return num
}


console.log(solution(6))