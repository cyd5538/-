const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arrayLength = +input[0];
const items = input.slice(1);
solution(arrayLength, items);

function solution(arrayLength, items) {
    for (let i=0; i<arrayLength; i++){
        let result = 0;
        let count = 0;
        for(let j=0; j<items[i]; j++){
            if(items[i][j] === "O"){
                count ++
                result += count;
            }else{
                count = 0;
            }
        }
        console.log(result);
    }
}