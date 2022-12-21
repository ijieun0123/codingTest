# 백트래킹

<br>

## 참고 영상

[조합 강의](https://www.youtube.com/watch?v=HYKpunR1Nto)<br>
[순열 강의](https://www.youtube.com/watch?v=0tcgYHU8IIs&t=15s)

<br>

## 정리

<pre>
* 백트래킹 & DFS 문제는 보통 다음과 같이 분류됨.
* 조합 / 순열 / 중복조합 / 중복순열 중 어떤 것인지 파악한 다음, 공식을 적용한다.
</pre>

<br>

### 조합 ( 순서X, 오름차순 || 내림차순 )

```js
dfs(start, pickArr);
```

[N과 M (2)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15650_N%EA%B3%BC_M(2).md>)<br>
[N과 M (6)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15655_N%EA%B3%BC_M(6).md>)<br>
[N과 M (10)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15664_N%EA%B3%BC_M(10).md>)

<br>

### 순열 ( 순서O, 오름차순 || 내림차순 )

```js
dfs(pickArr);
```

[N 과 M (1)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15649_N%EA%B3%BC_M(1).md>)<br>
[N과 M (5)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15654_N%EA%B3%BC_M(5).md>)<br>
[N과 M (9)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15663_N%EA%B3%BC_M(9).md>)

<br>

### 중복조합 ( 순서X )

```js
dfs(start, pickArr);
```

[N과 M (4)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15652_N%EA%B3%BC_M(4).md>)<br>
[N과 M (8)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15657_N%EA%B3%BC_M(8).md>)

<br>

### 중복순열 ( 순서O )

```js
dfs(pickArr);
```

[N과 M (3)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15651_N%EA%B3%BC_M(3).md>)<br>
[N과 M (7)](<https://github.com/ijieun0123/codingTest/blob/main/%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9/15656_N%EA%B3%BC_M(7).md>)
