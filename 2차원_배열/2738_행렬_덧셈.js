/*
const fs = require('fs');
const [NM, ...inputArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = NM.split(' ').map(Number);
const B = inputArr.map(el => el.split(' ').map(Number))
*/

// 0. 인풋 예시
const N = 3;
const M = 3;
const A = [];
const B = [
  [1, 1, 1],
  [2, 2, 2],
  [0, 1, 0],
  [3, 3, 3],
  [4, 4, 4],
  [5, 5, 100],
];

// 1. 행렬 A, B 구하기
for (let n = 0; n < N; n++) {
  A.push(B.shift());
}

// 2. 행렬 answerArr ( = 행렬 A + 행렬 B ) 구하기
const answerArr = [];
for (let n = 0; n < N; n++) {
  const Narr = [];
  for (let m = 0; m < M; m++) {
    Narr.push(A[n][m] + B[n][m]);
  }
  answerArr.push(Narr);
}

// 3. answer 출력
for (let answer of answerArr) {
  console.log(answer.join(" "));
}
