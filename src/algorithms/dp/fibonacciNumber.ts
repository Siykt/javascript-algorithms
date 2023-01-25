/**
 * 509. 斐波那契数
 * @description 递归版本
 * @param n n项
 */
export function fibByRecursion(n: number): number {
  // 思路: 经典递归
  if (n === 0) return 0
  if (n === 1) return 1
  return fibByRecursion(n - 1) + fibByRecursion(n - 2)
}

/**
 * 509. 斐波那契数
 * @description 动态规划版本
 * @param n n项
 */
export function fibByDP(n: number): number {
  // 带“备忘录”的DP

  // DP Table
  // 代表 n = 0 为 0, n = 1 为 1
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    // 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * 509. 斐波那契数
 * @description 动态规划 + 压缩DPTable 版本
 * @param n n项
 */
export function fibByPrefDP(n: number): number {
  // DP + 压缩DPTable

  if (n === 0) return 0
  if (n === 1) return 1

  // 压缩 DP Table为两个状态
  let prev = 1
  let ans = 1
  for (let i = 3; i <= n; i++) {
    // 状态转移方程
    // dp[i] = dp[i - 1] + dp[i - 2]
    const temp = ans
    ans = prev + ans
    prev = temp
  }
  return ans
}
