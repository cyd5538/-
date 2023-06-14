function solution(s) {
  let count = 0;

  for(let i=0; i<s.length; i++) {
    let stack = [];
    const temp = s.slice(i) + s.slice(0,i) 
    for(let j=0; j<temp.length; j++){
      if(temp[j] === "[" || temp[j] === "(" || temp[j] === "{"){
        stack.push(temp[j]);
      }else if(stack[stack.length-1] === "[" && temp[j] === "]"){
        stack.pop()
      }else if(stack[stack.length-1] === "{" && temp[j] === "}"){
        stack.pop()
      }else if(stack[stack.length-1] === "(" && temp[j] === ")"){
        stack.pop()
      }else{
        stack.push(temp[j])
      }
    }
    if(stack.length === 0) count++
  }
  return count;
}

console.log(solution("}}}"))
