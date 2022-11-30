/*
const fs = require('fs');
const inputArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
*/

// 0. 인풋 예시
const inputArr = [10, 40, 30, 60, 30];
const sortInputArr = inputArr.sort((a, b) => a - b);

// 1. 평균값
const inputSum = inputArr.reduce((a, b) => a + b);
const average = inputSum / inputArr.length;

// 2. 중앙값
const median = sortInputArr[Math.floor(inputArr.length / 2)];

// 3. answer ( = 평균값, 중앙값 ) 출력
const answer = [average, median].join("\n");
console.log(answer);
