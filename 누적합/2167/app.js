const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((a) => +a);

let array = []
for (let i = 1; i < 1 + N; i++) {
  let temp = input[i].split(" ").map((a) => +a);
  let sum = [0];
  for (let j = 0; j < temp.length; j++) {
    sum[j + 1] = sum[j] + temp[j];
  }
  array.push(sum)
}

for(let i=2+N; i<input.length; i++) {
    let temp = input[i].split(" ").map((a) => +a);
    let sum = 0;
    for(let j=temp[0]-1; j<=temp[2]-1; j++){
        sum += array[j][temp[3]] - array[j][temp[1]-1]
    }
    console.log(sum)
}
