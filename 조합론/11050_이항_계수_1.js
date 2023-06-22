// const fs = require('fs');
// const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const inputArr = input.map(el => el.split(' '))

// 파스칼의 삼각형
// = 이항계수를 삼각형으로 배열한 것
// = 즉, 파스칼의 삼각형을 구하면, 이항계수를 구할 수 있다.

const [N, K] = [5, 2]

const pascalArr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

const printAnswer = () => {
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) pascalArr[i][j] = 1;
      else pascalArr[i][j] = (pascalArr[i - 1][j - 1] + pascalArr[i - 1][j]);

      if(i === N && j === K) return pascalArr[N][K]
    }
  }
}

console.log(printAnswer());


