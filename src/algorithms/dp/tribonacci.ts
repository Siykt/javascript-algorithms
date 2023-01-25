/**
 * 1137. 第 N 个泰波那契数
 * @param n 泰波那契序列 Tn
 */
export function tribonacci(n: number): number {
  // 思路: DP
  // 状态为: n = (n - 1) + (n - 2) + (n - 3)

  // DPTable
  const dp: number[] = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    // 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  return dp[n]
}
