const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number).filter(value => value <= K).reverse();

solution(N,K,coins)

function solution(n, k, list) {
    let count = 0;

    for(let i of list) {
        if(k === 0){
            break;
        }
        if(k > 0){
            count += parseInt(k/i);
            k = k % -i;
        }
    }
    console.log(count);
}

