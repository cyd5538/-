function solution(n) {
  // testcase 15번 예외 처리
  if (n === 1) return 1;
  
  // n의 절반까지만 for문을 돌 것이므로 answer를 1부터 시작
  let answer = 1;
  let sum = 0;
  let start = 1;

  // i는 1부터 n의 절반(Math.ceil(n/2))까지 반복
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    sum += i; // sum에 현재 자연수 i를 더합니다.
    
    // sum이 n보다 크면 while 루프 진입
    while (sum > n) {
      sum -= start; // sum에서 start 값을 빼서 sum을 조정합니다.
      start++; // start 값을 증가시킵니다.
    }

    // sum과 n이 같으면 연속된 자연수의 합으로 표현 가능한 경우이므로 answer를 증가시킵니다.
    if (sum === n) {
      answer++;
    }

    console.log(sum)
  }

  return answer;
}

console.log(solution(15))
