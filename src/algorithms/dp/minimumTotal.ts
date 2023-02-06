/**
 * 120. 三角形最小路径和
 * @param triangle 三角形
 */
export function minimumTotal(triangle: number[][]): number {
  // DP
  // base case: 0, 0
  const len = triangle.length
  const dp = Array(len)
    .fill(0)
    .map(() => [0])
  dp[0][0] = triangle[0][0]
  // 子问题: 取下一层最小的节点
  // 状态: f[i][j] = min(f[i − 1][j − 1], f[i − 1][j]) + triangle[i][j]
  for (let i = 1; i < len; i++) {
    // 最左侧没有抉择, 连成一线
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
    for (let j = 1; j < i; j++) {
      // 状态
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
    }
    // 最右侧同样没有抉择
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
  }
  return Math.min(...dp[len - 1])
}
