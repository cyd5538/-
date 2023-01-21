const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];
for(let i =1; i< input.length; i++) {
    let arr = input[i].split(" ").map((a) => +a);
    result.push(arr)

}
console.log(result.sort((a,b) => {
    if(a[1] !== b[1]){
       return a[1]-b[1]
    }else{
       return a[0]-b[0]
    }
}).join("\n").replaceAll(",", " "))