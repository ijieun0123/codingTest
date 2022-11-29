/*
const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.map(el => el.split(' '))
*/

// 0. 인풋 예시
const inputArr = [
  [3, 7],
  [15, 7],
  [5, 2],
];

// 1. 도화지 그리기 (100*100)
const paperArr = new Array(100).fill(0).map(() => new Array(100));

// 2. 주어진 위치에 색종이(10*10) 붙이기
for (let arr of inputArr) {
  const [X, Y] = arr.map(Number);

  for (let x = X; x < X + 10; x++) {
    for (let y = Y; y < Y + 10; y++) {
      if (paperArr[x][y] === 1) {
        continue;
      } else {
        paperArr[x][y] = 1;
      }
    }
  }
}

// 3. ( 검은 영역의 넓이 ) answer 출력
const flatPaperArr = paperArr.flat();
const answer = flatPaperArr.reduce((a, b) => a + b);
console.log(answer);
