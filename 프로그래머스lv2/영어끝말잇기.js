function solution(n, words) {
  // stack으로 글자의 마지막수와 들어갈 첫번쨰 string이 같으면 push
  let stack = [];
  // 시작 단어를 넣어준다.
  stack.push(words[0])

  // 1부터 for문을 돌림
  for(let i=1; i<words.length; i++){
    const temp = words[i][0];
    const stacklast = stack[stack.length-1][stack[stack.length-1].length-1];

    // stack에 없고, 마지막과 들어갈 첫번째 문자열이 같으면 push
    if(stacklast === temp && !stack.includes(words[i])){
      stack.push(words[i]);
    // 그렇지않으면 끝말잇기 실패(?)니깐 return
    } else {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  // 탈락자가 없을 때
  return [0, 0];
}

console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
