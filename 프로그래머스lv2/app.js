function solution(s) {
  let left = 0
  let right = 0

  // 1이 아닐떄까지 반복
  while(s !== "1"){
    // 배열로 만들어주고
    s = s.split('');
    // 0의 갯수 저장하는 변수
    let temp = s.filter((a) => a !== "0").length
    // right에 전체갯수에서 0의 갯수뺀 값 더해주고
    right += s.length - temp
    // left는 반복문실행될떄마다 ++
    left++
    // s를 2진법으로 바꿔줌
    s = temp.toString(2);
  }
  return [left, right];
}


console.log(solution("110010101001"))