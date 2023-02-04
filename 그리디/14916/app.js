const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()
input = +input

let count = 0;
if(input === 1 || input === 3) return console.log(-1);

while(input > 0){
    if(input%2 === 1 || input%5 === 0){
        input -= 5;
        count ++
    }else if(input%2 === 0){
        input -= 2;
        count ++;
    }
}
console.log(count)