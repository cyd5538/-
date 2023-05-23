// JadenCase문자열만들기

// arr[i].charAt(0) 이부분을 처음에는 arr[i][0] 으로했는데 런타임 에러가 났다.
// charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환
function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  for(let i=0; i<arr.length; i++) {
    answer += arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()

    if(i !== arr.length-1) answer += " "
  }

  return answer
}

console.log(solution("3people unFollowed me"))