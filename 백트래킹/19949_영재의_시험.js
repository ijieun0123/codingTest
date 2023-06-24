// 풀이가 없다. 아씨 나중에 다시 봐야지.

// 0. 인풋 예시
const input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const [N, M] = [5, 10];

/*
const input = [1, 2, 2];
const [N, M] = [2, 3];
*/

// 1. DFS 중복순열
function dfs(pickArr = []) {
  if (pickArr.length === M) {
    let count = 0;
    const score = input.filter((el, i) => el === pickArr[i]).length;

    if (score >= 2) count++;
    console.log(pickArr);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (pickArr.length > 1 && pickArr[i - 2] === i && pickArr[i - 1] === i) {
      // 이부분에 뭔가 문제가 있음
      continue;
    } else {
      pickArr.push(i);
      dfs(pickArr);
      pickArr.pop();
    }
  }
}

dfs();

console.log(count);
