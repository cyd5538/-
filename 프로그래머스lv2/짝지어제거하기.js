function solution(s) {
  let stack = [];
  // stack에 넣고 stack의 마지막값과 넣으려는 값이 값으면 스택값을 지워준다
  for(let i=0; i<s.length; i++) {
    if(stack[stack.length-1] === s[i]){
      stack.pop()
    }else{
      stack.push(s[i])
    }
  }

  return stack.length === 0 ? 1 : 0
}

console.log(solution("baabaa"));
