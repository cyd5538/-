const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, ...arr] = input;
n = Number(n);
arr = arr.map((i) => i.split(" ").map((a) => Number(a)))

arr = arr.sort((a,b) => {
    if(a[1] - b[1] === 0){
        return a[0] - b[0];
    }
    return a[1] - b[1];
})

let start = arr[0]
let result = 1;

for(let i = 1; i < arr.length; i++){
    let num = arr[i];
    if(start[1] <= num[0]){
        start = num;
        result += 1;
    }
}
console.log(result)