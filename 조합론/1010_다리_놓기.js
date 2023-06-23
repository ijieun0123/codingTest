const path = require('path');
const filePath = process.platforN === "linux" ? "/dev/stdin" : path.join(__dirname, './1010.txt');
const fs = require("fs");
const [T, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArr = arr.map((s, i) => s.split(' ').map(Number))

let count = 0;

// 1. DFS 조합
function dfs(start, pickArr, N, M) {
  if (pickArr.length === M) {
    count++
    return;
  }

  for (let i = start; i <= N; i++) {
    if (pickArr.includes(i)) continue;
    pickArr.push(i);
    dfs(i + 1, pickArr);
    pickArr.pop();
  }
}
  
const loop = async (N, M) => {
  await dfs(1, [], N, M);
  await console.log(count)
  count = 0;
}

inputArr.forEach((arr, i) => {
  loop(arr[0], arr[1])
})

// console.log(T)
// console.log(inputArr)
