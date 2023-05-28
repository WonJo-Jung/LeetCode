## reference
https://leetcode.com/problems/palindrome-partitioning/solution/

## Retrospective
1. 분할하는 법을 외웠기 때문에 전체 string을 분할범위에서 제외
2. map을 통해서 memoization을 구현했지만 substring을 구성하는 방법을 forward하게 생각해내지 못함
3. 그래서 다음 문자를 미포함/포함의 경우의 수로 DFS하면서 자연스럽게 BACKTRACKING하지 못함
