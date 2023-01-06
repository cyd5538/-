const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split("");

let num = 0;
for (let k of input) {
  switch (k) {
    case "A":
    case "B":
    case "C":
      num += 3;
      break;
    case "D":
    case "E":
    case "F":
      num += 4;
      break;
    case "G":
    case "H":
    case "I":
      num += 5;
      break;
    case "J":
    case "K":
    case "L":
      num += 6;
      break;
    case "M":
    case "N":
    case "O":
      num += 7;
      break;
    case "P":
    case "Q":
    case "R":
    case "S":
      num += 8;
      break;
    case "T":
    case "U":
    case "V":
      num += 9;
      break;
    case "W":
    case "X":
    case "Y":
    case "Z":
      num += 10;
      break;
  }
}
console.log(num);
