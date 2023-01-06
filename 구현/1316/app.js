const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const number = +input[0];

let num = 0;
for(let i = 1; i<=number; i++){
    let array = [];

    // 연속되는 숫자를 제거
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] !== input[i][j+1]){
            array.push(input[i][j])
        }
    }
    
    // set으로 중복제거해주고
    const set = new Set(array);

    // 그 값이 같으면 ++
    if(set.size === array.length){
        num ++
    }
}

console.log(num)