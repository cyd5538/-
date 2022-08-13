const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const arraylength = +input[0]
const arrayA = input[1].split(' ').map((item) => +item);


solution(arraylength,arrayA)

function solution(arraylength, arrayA) {
    let Max = -1000001;
    let Min = 1000001;
    for (let i=0; i< arraylength; i++){
        let array = arrayA[i]
        if(Max < array) Max = array
        if(Min > array) Min = array  
    }
    console.log(Min, Max)
}