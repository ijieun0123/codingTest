const [N, M] = [4, 2];
const arr = [9, 8, 7, 1];
const arrSort = arr.sort((a, b) => a - b);

let answer = "";

const dfs = pickArr => {
  if (pickArr.length === M) {
    answer += pickArr.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (pickArr.includes(arrSort[i])) continue;
    pickArr.push(arrSort[i]);
    dfs(pickArr);
    pickArr.pop();
  }
};

dfs([]);

console.log(answer);
