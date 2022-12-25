const { reverse } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const items = input.map((item) => +item);

solution(items)

function solution(items) {
    let array = items.splice(1).sort((a,b) => a-b)
    let multiple = []
    for(let i=0; i<array.length; i++) {
        multiple.push(i+1)
    }
    multiple.reverse()
    array = array.map((arr,b) => arr * multiple[b])
    console.log(Math.max(...array))

}