const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")

let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
let day = [31,28,31,30,31,30,31,31,30,31,30,31];

let total = 0;
for(let i=0; i<input[0]-1; i++){
    total += day[i]
}   

total += +input[1];
console.log(week[total%7])
