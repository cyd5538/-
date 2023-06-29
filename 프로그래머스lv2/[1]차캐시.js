function solution(cacheSize, cities) {
  let stack = [];
  let count = 0;
  
  for(let i=0; i<cities.length; i++){
    let temp = cities[i].toUpperCase()

    // stack에 이미 있으면 기존의 있던 문자지우고 push count +=1
    if(stack.includes(temp)){
      count += 1;
      stack.splice(stack.indexOf(temp), 1);
      stack.push(temp);
    // 캐시사이즈보다 작으면 push count+= 5 
    }else if(stack.length < cacheSize){
      count += 5;
      stack.push(temp);
    // casheSize보다 크면 앞에꺼 지우면서 pushz
    }else{
      count += 5;
      stack.push(temp)
      stack.shift()
    }
  }

  return count
}

console.log(solution(3,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))