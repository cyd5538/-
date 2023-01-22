const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [num1, num2] = input[0].split(" ").map((item) => +item);

let max = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
  }
  return gcd;
}

let min = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}
console.log(max(num1,num2))
console.log(min(num1,num2))