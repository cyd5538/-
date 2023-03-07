const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let M = +input.shift();
for(let i=0; i<M; i++){
    let num = +input.shift();
    let array = input.splice(0,num).map((a) => a.split(" ").map(Number)).sort((a,b) => a[0] - b[0]);
    let result = 1;
    let start = array[0][1];
    for(let i=1; i<array.length; i++){
        if(start >= array[i][1]){
            start = array[i][1]
            result ++
        }
    }
    console.log(result)
}