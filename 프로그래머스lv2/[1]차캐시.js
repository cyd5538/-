function solution(cacheSize, cities) {
  let stack = [];
  let count = 0;
  
  for(let i=0; i<cities.length; i++){
    if(!stack.includes(cities[i])){
      stack.push(cities[i]);
      count+= 5;
    }else{
      count+=2;
    }
  }

  return count
}

console.log(solution(3,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))