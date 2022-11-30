/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(' ').map(Number);
const scoreArr = input[1].split(' ').map(Number);
*/

// 0. 인풋 예시
const [N, K] = [5, 2];
const scoreArr = [100, 76, 85, 93, 98];

// 1. scoreArr 오름차순 정렬
const newScoreArr = scoreArr.sort((a, b) => b - a);

// 2. answer ( 커트라인 ) 출력
const answer = newScoreArr[K - 1];
console.log(answer);
