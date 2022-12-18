// * 강의링크
// https://www.youtube.com/watch?v=0tcgYHU8IIs&t=15s

// * 키워드
// - DFS
// - 백트래킹
// - O(n!) 시간복잡도

// * 백트래킹 패턴
// - 반복
// - 타겟 선택
// - DFS 탐색
// - 선택 취소 ( 타겟 되돌아가기 )

function permutate(arr) {
  const result = [];

  // DFS
  const dfs = start => {
    // base condition
    if (start === arr.length) {
      return result.push([...arr]);
    }

    for (let i = start; i < arr.length; i++) {
      // swap
      [arr[start], arr[i]] = [arr[i], arr[start]];
      // dfs
      dfs(start + 1);
      // swap back
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  };

  dfs(0);
  return result;
}

console.log(permutate([1, 2, 3, 4]));
