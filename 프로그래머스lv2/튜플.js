function solution(s) {
  const tuple =  s
  .slice(2,-2)
  .split("},{")
  .map((a) => a.split(",").map(Number))
  .sort((a,b) => a.length-b.length)
  .flat()

  return Array.from(new Set(tuple))
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))