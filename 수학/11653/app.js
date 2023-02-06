const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

let num = 2;
while(input > 1){
    if(input%num === 0){
        input = input/num;
        console.log(num);
    }else{
        num++
    }
}
