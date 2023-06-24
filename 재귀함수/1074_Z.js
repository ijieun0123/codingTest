const filePath = process.platform === "linux" ? "/dev/stdin" : "./1074.txt";
const fs = require("fs");
const [N, r, c] = fs.readFileSync(filePath).toString().trim().split(" ");

function printOrder(N, r, c) {
  if (N < 1) return 0;

  const half = Math.pow(2, N - 1);
  let squares = (r >= half) * 2 + (c >= half) * 1;
  if (r >= half) r -= half;
  if (c >= half) c -= half;
  const result = half * half * squares;
  return result + printOrder(N - 1, r, c);
}

console.log(printOrder(N, r, c));

// 이해가 안됨...
