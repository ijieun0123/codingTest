/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input)
*/

// 0. 예시 인풋
const N = 500;

// 1. N 개의 시리즈를 가진 seriesArr 구하기
// ( 시리즈는 모두 '666'을 포함하고 있고, 오름차순 정렬 )
const seriesArr = [];

for (let i = 666; i >= 666; i++) {
  if (i.toString().includes("666")) {
    seriesArr.push(i);
  }
  if (seriesArr.length === N) {
    break;
  }
}

// 2. answer 출력
const answer = seriesArr[N - 1];
console.log(answer);
