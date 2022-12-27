const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
    
input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
   let Aarray = String(A).split("");
   let Barrry = String(B).split("");
   let result = []

   for(let i=0; i<Aarray.length; i++){
    if(Barrry[i] === "6"){
        Barrry[i] = "5"
    }
    if(Aarray[i] === "6"){
        Aarray[i] = "5"
    }
   }
   let Min = +Aarray.join("") + +Barrry.join("");
   result.push(Min)

   for(let i=0; i<Barrry.length; i++){
    if(Barrry[i] === "5"){
        Barrry[i] = "6"
    }
    if(Aarray[i] === "5"){
        Aarray[i] = "6"
    }
   }
   let Max = +Aarray.join("") + +Barrry.join("");
   result.push(Max)


   console.log(result.join(" "))
}