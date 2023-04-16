const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0].split(" ").map(Number)[0]
const k = input[0].split(" ").map(Number)[1]

let medalList = [];

// 나라번호, 골드, 실버, 브론즈별로 갯수 넣어주고
for (let i = 1; i < input.length; i++) {
  const [country, gold, silver, bronze] = input[i].split(" ").map(Number);
  medalList.push({
    country,
    gold,
    silver,
    bronze,
  });
}

// 메달별로 정렬
medalList.sort((a, b) => {
    if (a.gold !== b.gold) return b.gold - a.gold;
    if (a.silver !== b.silver) return b.silver - a.silver;
    return b.bronze - a.bronze;
});

// 초기 순위 1등을 넣어주고 2번째 인덱스가 1등이랑 메달수가 같으면 똑같은 순위로 ranks 배열에 넣어줌
let rank = 1;
let prevMedal = [medalList[0].gold, medalList[0].silver, medalList[0].bronze];
let ranks = [1];

for (let i = 1; i < medalList.length; i++) {
  const currMedal = [medalList[i].gold  
  if (prevMedal[0] === currMedal[0] && prevMedal[1] === currMedal[1] && prevMedal[2] === currMedal[2]) {
    ranks.push(rank);
  } else {
    rank = i + 1;
    ranks.push(rank);
  }

  prevMedal = currMedal;
}

for (let i = 0; i < medalList.length; i++) {
  medalList[i].rank = ranks[i];
}

console.log(medalList.filter((a) => a.country === k)[0].rank);