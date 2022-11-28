/*
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input[0] = input[0].split(" ");
const cardsArr = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]); // N은 총 카드의 개수
const M = Number(input[0][1]);
*/

// 0. 예시 인풋
const N = 10;
const M = 500;
const cardsArr = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
const sumArr = [];

// 1. 3장의 카드를 픽하여 더하기 => sum 을 sumArr 에 담아둔다.
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let x = j + 1; x < N; x++) {
      const sum = cardsArr[i] + cardsArr[j] + cardsArr[x];
      sumArr.push(sum);
      //console.log("sumArr " + sumArr);
      //console.log("i, j, x " + i, j, x);
    }
  }
}

// 2. sumArr 오름차순 정렬
const newSumArr = sumArr.sort((a, b) => a - b);
// console.log("newSumArr " + newSumArr);

// 3. answer 출력
const findIndex = newSumArr.findIndex((el, i) => el > M);
if (findIndex === -1) {
  const answer = newSumArr[newSumArr.length - 1];
  console.log(answer);
} else {
  const answer = newSumArr[findIndex - 1];
  console.log(answer);
}
