// * 강의 출처 https://www.youtube.com/watch?v=HYKpunR1Nto
// * 풀이 출처 https://min-kyung.tistory.com/14

// * 3C2 구하기 => (1, 2), (1, 3), (2, 3)

// * 키워드
// 1. DFS
// 2. 다음 Depth 에서의 시작점
// 3. 백트레킹

// * 팁
// 그냥 외운다.

const n = 3;
const k = 2;

var combine = function (n, k) {
  let numsArr = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, 3 ... n] 배열 생성
  let result = [];

  const dfs = (pickArr, start) => {
    if (pickArr.length == k) {
      // k개를 다 뽑았을 경우
      result.push(Array.from(pickArr));
      return;
    }

    for (let i = start; i < numsArr.length; i++) {
      pickArr.push(numsArr[i]);
      dfs(pickArr, numsArr[i]);
      pickArr.pop(); // k개를 다 뽑았을 경우, pop해서 다시 백트래킹
    }
  };

  dfs([], 0);
  return result;
};

console.log(combine(n, k));
