const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for(let i=0; i<input.length-1; i++){
  const temp = input[i].split(" ").slice(1).map(Number);
  
  function combination(arr, num){
    let result = [];
    if(num === 1) return arr.map((a) => [a]);
  
    arr.forEach((a, i, array) => {
      let tempSlice = array.slice(i+1)
      let combi = combination(tempSlice, num - 1);
      let combin = combi.map((x) => [a, ...x]);
      result.push(...combin);
    })
    return result;
  }
  
  const result = combination(temp, 6);

  result.forEach((arr) => {
    console.log(arr.join(" "));
  });
  if(i !== input.length-2) console.log();
}

