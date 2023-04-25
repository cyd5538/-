const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function getCombinations(arr, selectedCount) {
    const result = [];
    if (selectedCount === 1) {
      return arr.map(item => [item]);
    }
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectedCount - 1);
      const attached = combinations.map(combination => [fixed, ...combination]);
      result.push(...attached);
    });
  
    return result;
  }

const combinations = getCombinations(input, 7);

for (let combination of combinations) {
    const sum = combination.reduce((acc, cur) => acc + cur, 0);
    if (sum === 100) {
      // 조건에 만족하는 조합을 찾았을 경우, 선택된 난쟁이들의 키를 오름차순으로 정렬하여 출력
      console.log(combination.sort((a, b) => a - b).join('\n'));
      break;
    }
}