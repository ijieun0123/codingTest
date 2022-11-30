/*
const fs = require('fs');
const string = fs.readFileSync("/dev/stdin").toString().trim();
*/

// 0. 인풋 예시
const string = "500613009";

// 1. string 을 쪼개기
const Narr = [];
for (let N of string) {
  Narr.push(parseInt(N));
}

// 2. answer ( 내림차순 정렬 후 조인 ) 출력
const answer = Narr.sort((a, b) => b - a).join("");

console.log(answer);
