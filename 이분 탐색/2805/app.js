const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

// 배열에서 높이를 빼서 더한 총 값 구하는 함수.
function sumTrees (height) {
  let sum = 0;
  for(let i=0; i<trees.length; i++){
    if(trees[i] > height){
      sum += trees[i] - height;
    }
  }
  return sum;
}

// 이진 탐색
function BinarySearch(left, right) {
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    let sum = sumTrees(mid);
    if(sum < m){
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return right;
}

console.log(BinarySearch(0, Math.max(...trees)))