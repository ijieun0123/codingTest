/*
const fs = require('fs');
const [N, ...inputArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const XYArr = inputArr.map(el => el.split(' '))
*/

// 0. 인풋 예시
const N = 5;
const XYArr = [
  [3, 4],
  [1, 1],
  [1, -1],
  [2, 2],
  [3, 3],
];

// 1. x 좌표 오름차순 적용 후, y 좌표 오름차순 적용
const sortArr = XYArr.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0]);

// 2. answer 출력
const answer = sortArr.map(el => el.join(" ")).join("\n");
console.log(answer);
