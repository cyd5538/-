// 2로 나누면서 
// a,b를 Math.ceil로 나눈 값이 같으면 같은 대진에서 만나는 것.
function solution(n, a, b) {
  let count = 0;

  while(n > 1){
    n /= 2
    a = Math.ceil(a/2)
    b = Math.ceil(b/2)
    count++
    if(a===b) break;
  }
  return count
}

console.log(solution(8,4,7))

