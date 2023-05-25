//최솟값 만들기
// 하나는 내림차순 하나는 오름차순해서 곱해서 합쳐주기
function solution(A,B){
  let num1 = A.sort((a,b) => a-b)
  let num2 = B.sort((a,b) => b-a)

  return num1.reduce((acc, curr, index) => acc + curr * num2[index], 0)
}

console.log(solution([1,2],[3,4]))