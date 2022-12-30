const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const number = +input[0];

for(let i=1; i<=number; i++){
    let stack = [];
    let array = input[i];
    let result = "Yes";
    for(let j=0; j<array.length; j++){
        if(array[j] === "("){
            stack.push("(");
        }else{
            if(!stack.pop()){
                result = "No"
            }
        }
    }
    if(stack.length !== 0){
        result = "No"
    }
    console.log(result)
}