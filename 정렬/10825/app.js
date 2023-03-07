const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...array] = input;

let result = array
  .map((a) => a.split(" "))
  .sort((a, b) => {
    if(+a[1] !== +b[1]){
      return b[1] - a[1]
    }else if(+a[1] === +b[1] && +a[2] !== +b[2]){
      return a[2] - b[2]
    }else if(+a[1] === +b[1] && +a[2] === +b[2] && +a[3] !== +b[3]){
      return b[3] - a[3]
    }else{
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
      else return 0
    }
  });
console.log(result.map((a) => a[0]).join("\n"));
