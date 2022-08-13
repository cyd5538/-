const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


const items = input.map((item) => +item);

solution(items)

function solution(items) {
    const answer = Array(42).fill(0);
    for (let i=0; i< items.length; ++i){
        const nowChar = +items[i] % 42;
        answer[nowChar]++;
    }
    let cnt = 0;
    for (let i=0; i<answer.length; ++i){
        if(answer[i] !== 0){
            cnt++;
        }
    }
    console.log(cnt);
}

// trim() 을 적용하지 않아서 오지게 고생했다..