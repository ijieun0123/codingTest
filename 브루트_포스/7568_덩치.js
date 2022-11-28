/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
const sizeArr = input.map(el => el.split(' ').map(num => parseInt(num)));
*/

// 0. 예시 인풋
const N = 5;
const sizeArr = [
  [55, 185],
  [58, 183],
  [88, 186],
  [60, 175],
  [46, 155],
];
const answerArr = [];

// 1. (x, y) 등수 구하기
for (let el of sizeArr) {
  const X = el[0];
  const Y = el[1];
  let rank = 1;

  for (let i = 0; i < N; i++) {
    if (sizeArr[i][0] > X && sizeArr[i][1] > Y) {
      rank++;
    }
  }

  answerArr.push(rank);
}

// 2. answer 출력
const answer = answerArr.join(" ");
console.log(answer);
