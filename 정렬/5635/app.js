const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = +input.shift();

let peoples = [];
for(let i=0; i<input.length; i++){
  const temp = input[i].split(" ")
  peoples.push(temp)
}

peoples.sort((a,b) => {
  if(a[3] - b[3]){
    return b[3] - a[3]
  }else if(a[2] - b[2]){
    return b[2] - a[2]
  }else{
    return b[1] - a[1]
  }
})

console.log(peoples[0][0])
console.log(peoples[peoples.length-1][0])
