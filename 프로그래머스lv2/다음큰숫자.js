function solution(n) {
  // n의 1의 갯수를 세주고
  let temp = n.toString(2).split("").filter((a) => a === "1").length

  let num = 0;
  // temp와 1의 갯수가 같아질떄까지 반복문을 돌린다
  while(num !== temp){
    n++
    // n을 1씩올리고 1의 갯수를 세서 맞으면 탈출 아니면 계속 올리기
    num = n.toString(2).split("").filter((a) => a === "1").length
  }

  return n
}

console.log(solution(78))