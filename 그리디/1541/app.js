const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// -뒤에있는 값을 크게해야한다.
// -뒤에있는 값들을 더해준다

let result = input.split("-").map((a) => {
    return a.split("+").reduce((acc,crr) => +acc + (+crr))
})

// 그리고 이제 뺴주면 된다
result = result.reduce((acc,crr) => acc-crr);

console.log(result)