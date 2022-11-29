/*
const fs = require('fs');
const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(' '));
*/

// 0. 인풋 예시
const inputArr = [
  [3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 35, 28, 75, 90, 76, 1],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 65, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80],
];

// 1. 최댓값 구하기
const newInputArr = inputArr.flat();
const max = Math.max(...newInputArr);

// 2. 최댓값의 행과 열을 구하여 answer 출력
for (let i = 0; i < inputArr.length; i++) {
  const row = inputArr[i].findIndex(num => parseInt(num) === max);

  if (row !== -1) {
    console.log(max);
    console.log(i + 1 + " " + (row + 1));
    break;
  }
}
