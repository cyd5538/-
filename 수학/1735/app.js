const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  let [a, b] = input[0].split(" ").map(Number);
  let [c, d] = input[1].split(" ").map(Number);
  
  let lcm = (b * d) / gcd(b, d);
  let numerator = a * (lcm / b) + c * (lcm / d);
  let denominator = lcm;
  
  let g = gcd(numerator, denominator);
  numerator /= g;
  denominator /= g;
  
  console.log(`${numerator} ${denominator}`);