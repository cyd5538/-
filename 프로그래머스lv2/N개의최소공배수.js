function solution(arr) {
  
  const gcd = (a,b) => a%b === 0 ?b : gcd(b,a%b)

  return arr.reduce((a,b) => {
    return a*b / gcd(a,b)
  })
}
console.log(solution([2,6,8,14]))