const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

input.shift()

let hash = {};
for(let i =0; i<input.length; i++){
    let temp = input[i]
    hash[temp] ? hash[temp] += 1 : hash[temp] = 1 ;
}

hash = Object.entries(hash).sort((a,b) => {
    if(a[1] !== b[1]){
        return b[1] - a[1]
    }else{
        if (a[0] > b[0]) return 1;
        else if (b[0] > a[0]) return -1;
        else return 0;
    }
})

console.log(hash[0][0])