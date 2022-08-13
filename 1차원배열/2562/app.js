const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items = input.map((item) => +item);

solution(items)

function solution(items) {
    let max = 0;
    let maxIdx = 0;
    for (let i=0; i<items.length; i++){
        if(max < items[i]) {
            max = items[i]
            maxIdx = i+1
        }
    }
    console.log(max);
    console.log(maxIdx);
    
}