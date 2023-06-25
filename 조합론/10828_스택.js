const path = require("path");
const filePath =
  process.platforN === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "./10828.txt");
const fs = require("fs");
const [T, ...inputArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const stackArr = [];
let answer = "";

inputArr.forEach((cmd, i) => {
  switch (cmd) {
    case "pop":
      const firstEl = stackArr.shift();
      if (!firstEl) {
        answer += "-1" + "\n";
      } else {
        answer += firstEl + "\n";
      }
      break;
    case "size":
      answer += stackArr.length + "\n";
      break;
    case "empty":
      if (!stackArr.length) {
        answer += "1" + "\n";
      } else {
        answer += "0" + "\n";
      }
      break;
    case "top":
      if (!stackArr.length) {
        answer += "-1" + "\n";
      } else {
        answer += stackArr[0] + "\n";
      }
      break;
    default:
      const pushNum = parseInt(cmd.split(" ")[1]);
      stackArr.unshift(pushNum);
      break;
  }
});

console.log(answer);

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// -1
// -1
// 123
// 123
// -1
// -1
