/*
const fs = require('fs');
const userArr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);
*/

// 0. 인풋 예시
const userArr = ["21 Junkyu", "21 Dohyun", "20 Sunyoung"];

// 2. userArr 오름차순 정렬 ( parseInt => string 제거하고 number 로 변환 )
const sortArr = userArr.sort((a, b) => parseInt(a) - parseInt(b));

// 3. answer 출력
const answer = sortArr.join("\n");
console.log(answer);
