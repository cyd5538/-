const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let doro = input[1].split(" ").map((a) => +a)
let juyu = input[2].split(" ").map((a) => +a)
juyu.pop();
let result = 0;

let min = juyu[0];
for(let i=0; i<juyu.length; i++){
    if(min > juyu[i]){
        min = juyu[i];
    }
    result += min * doro[i]
}
console.log(result)
// 부분성공?????????? 정답을 알려줘
