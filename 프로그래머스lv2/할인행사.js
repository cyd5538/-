function solution(want, number, discount) {
  let answer = 0;
  
  for(let i=0; i<discount.length-9; i++){
    // 10개씩 자르고
    let ten = discount.slice(i, i+10);
    let flag = true;

    // 조건에 부합할때는 false로 
    for(let j=0; j<want.length; j++){
      // want[j] === number[j] 갯수가 안맞으면 불가능
      if(ten.filter((a) => a === want[j]).length !== number[j]){
        flag = false;
        break;
      }
    }
    // true일때만 ++
    if(flag) answer ++
  }
  
  return answer
}


console.log(solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
))