/* 0. 인풋
const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
*/

let input = 9991;
let number = 2;

// 1. input 이 1 이 될때까지 소인수분해
while (input > 1) {
  if (input % number === 0) {
    input = input / number;
    console.log(number);
  } else {
    number++;
  }
}
