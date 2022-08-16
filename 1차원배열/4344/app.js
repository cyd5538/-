const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}
solution(inputC, inputTestCase);
function solution(C, testcase) {

    for(let i = 0; i<C; i++){
        let N = testcase[i].N
        let Narray = testcase[i].arr
        let result = Narray.reduce((a,b) => a+b) / N
        let num = 0;
        for(let j=0; j<Narray.length; j++){ 
            if(Narray[j] > result){
                num ++
            } 
        }
        console.log(`${(num/N * 100).toFixed(3)}%`);
 

    }
    
}


