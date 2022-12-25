const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    


const testCaseArray = [];
for(let i=1; i<=+input[0]; i++){
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push([tempValue[0],tempValue[1]])
}

solution(+input[0],testCaseArray);

function solution(T, testcaseArray) {
    for(let i=0; i<testCaseArray.length; i++) {
        console.log(testCaseArray[i])
    }
}