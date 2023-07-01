function solution(clothes) {
  const style = new Map();

  clothes.forEach((a) => {
    const [item, type] = a;
    style.set(type, (style.get(type) || 0) + 1);
  });

  let answer = 1
  for(let i of style.values()){
      answer *= (i + 1)
  }

  return answer;
}


console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))